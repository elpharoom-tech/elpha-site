import { HeaderSection } from "@/components/HeaderSection";
import { HeroSection } from "@/components/HeroSection";
import { OperationSection } from "@/components/OperationSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ApplicationsSection } from "@/components/ApplicationsSection";
import { WorkPrinciplesSection } from "@/components/WorkPrinciplesSection";
import { MethodologySection } from "@/components/MethodologySection";
import { ManifestSection } from "@/components/ManifestSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="bg-[#f4efe7] text-[#191714]">
      <HeaderSection />

      <HeroSection />

      <OperationSection />
      <CapabilitiesSection />

      <ApplicationsSection />

      <WorkPrinciplesSection />

      <MethodologySection />

      <ManifestSection />

      <FooterSection />
    </main>
  );
}
