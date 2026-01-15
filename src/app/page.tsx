import { Header } from "@/components/implements/header";
import CatalogCourse from "@/features/landing/components/CatalogCourse";
import { LandingHero } from "@/features/landing/components/LandingHero";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <LandingHero />
      <CatalogCourse />
    </div>
  );
}
