import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[2px] bg-transparent">
      <div
        className="h-full relative"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, hsl(0 0% 100% / 0.15), hsl(0 0% 100% / 0.7), hsl(0 0% 100% / 0.9))",
          transition: "width 0.08s linear",
        }}
      >
        {/* Leading glow dot */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2"
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "hsl(0 0% 100%)",
            boxShadow: "0 0 12px 3px hsl(0 0% 100% / 0.5), 0 0 4px 1px hsl(0 0% 100% / 0.8)",
            opacity: progress > 0.5 ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}
