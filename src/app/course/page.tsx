import CourseHero from "@/features/landing/components/CourseHero";
import CatalogCourse from "@/features/landing/components/CatalogCourse";
import LandingFooter from "@/components/implements/footer";

export const metadata = {
  title: "Katalog Kelas",
};

export default function Page() {
  return (
    <main>
      <CourseHero />
      <CatalogCourse />
      <LandingFooter />
    </main>
  );
}
