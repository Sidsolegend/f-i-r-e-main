import HiddenNav from "@/components/landing/HiddenNav";
import ScrollProgress from "@/components/landing/ScrollProgress";
import CustomCursor from "@/components/landing/CustomCursor";
import Scene1Opening from "@/components/landing/Scene1Opening";
import Scene2Problem from "@/components/landing/Scene2Problem";
import Scene3Idea from "@/components/landing/Scene3Idea";
import Scene4Framework from "@/components/landing/Scene4Framework";
import Scene5Platform from "@/components/landing/Scene5Platform";
import Scene6Team from "@/components/landing/Scene6Team";
import Scene7Process from "@/components/landing/Scene7Process";
import Scene7Impact from "@/components/landing/Scene7Impact";
import Scene8Reveal from "@/components/landing/Scene8Reveal";
import Scene9CTA from "@/components/landing/Scene9CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-background grain-overlay">
      <CustomCursor />
      <ScrollProgress />
      <HiddenNav />
      <Scene1Opening />
      <Scene2Problem />
      <Scene3Idea />
      <Scene4Framework />
      <Scene5Platform />
      <Scene6Team />
      <Scene7Process />
      <Scene7Impact />
      <Scene8Reveal />
      <Scene9CTA />
      <Footer />
    </div>
  );
};

export default Index;
