import HiddenNav from "@/components/landing/HiddenNav";
import OpeningScene from "@/components/landing/OpeningScene";
import ProblemSection from "@/components/landing/ProblemSection";
import VisionSection from "@/components/landing/VisionSection";
import FrameworkSection from "@/components/landing/FrameworkSection";
import PlatformSection from "@/components/landing/PlatformSection";
import TeamSection from "@/components/landing/TeamSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ImpactSection from "@/components/landing/ImpactSection";
import FinalReveal from "@/components/landing/FinalReveal";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HiddenNav />
      <OpeningScene />
      <ProblemSection />
      <VisionSection />
      <FrameworkSection />
      <PlatformSection />
      <TeamSection />
      <ProcessSection />
      <ImpactSection />
      <FinalReveal />
      <Footer />
    </div>
  );
};

export default Index;
