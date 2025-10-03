import { ComponentsSection } from "./_section/components/ComponentsSection";
import { HeroSection } from "./_section/hero/HeroSection";
import { JoinUsSection } from "./_section/join-us/JoinUsSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <ComponentsSection />
      <JoinUsSection />
    </div>
  );
};

export default page;
