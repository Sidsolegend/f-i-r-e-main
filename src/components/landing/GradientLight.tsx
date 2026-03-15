interface GradientLightProps {
  position?: "top" | "center" | "bottom";
  intensity?: number;
  size?: string;
  className?: string;
}

export default function GradientLight({
  position = "center",
  intensity = 0.15,
  size = "60% 50%",
  className = "",
}: GradientLightProps) {
  const yMap = { top: "30%", center: "50%", bottom: "70%" };

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(ellipse ${size} at 50% ${yMap[position]}, hsla(0,0%,20%,${intensity}) 0%, transparent 70%)`,
      }}
    />
  );
}
