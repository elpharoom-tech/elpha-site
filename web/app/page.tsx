import { HeaderSection } from "@/components/0-HeaderSection";
import { HeroSection } from "@/components/1-HeroSection";
import { SolutionsSection } from "@/components/2-SolutionsSection";
import { MethodologySection } from "@/components/3-MethodologySection";
import { FooterSection } from "@/components/4-FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#191714]">
      <HeaderSection />

      <HeroSection />

      <SolutionsSection />

      <MethodologySection />

      <FooterSection />
    </main>
  );
}
