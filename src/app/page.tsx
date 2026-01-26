import { CarouselPlugin } from "@/features/landing/components/TeknologiCarousel";
import { LandingHero } from "@/features/landing/components/LandingHero";
import CatalogCourse from "@/features/landing/components/CatalogCourse";
import LandingFooter from "@/components/implements/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <LandingHero />
      <CarouselPlugin />
      <CatalogCourse />
      <LandingFooter />
    </div>
  );
}
