import { Header } from "@/components/implements/header";
import { CarouselPlugin } from "@/features/landing/components/TeknologiCarousel";
import { LandingHero } from "@/features/landing/components/LandingHero";
import CatalogCourse from "@/features/landing/components/CatalogCourse";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 font-sans dark:bg-black">
      <Header />
      <LandingHero />
      <CarouselPlugin />
      <CatalogCourse />
    </div>
  );
}
