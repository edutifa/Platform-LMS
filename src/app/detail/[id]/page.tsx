import { Header } from "@/components/implements/header";
import LandingFooter from "@/components/implements/footer";
import { getCourseDetailById } from "@/features/detail/dto/DetailDTO";
import { CourseDetailBanner } from "@/features/detail/components/CourseDetailBanner";
import { CourseAboutSection } from "@/features/detail/components/CourseAboutSection";
import { CourseBenefitsSection } from "@/features/detail/components/CourseBenefitsSection";
import { CourseInstructorsSection } from "@/features/detail/components/CourseInstructorsSection";
import { CourseSyllabusSection } from "@/features/detail/components/CourseSyllabusSection";
import { CoursePricingSection } from "@/features/detail/components/CoursePricingSection";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;
  const numericId = Number(id);
  const course = getCourseDetailById(numericId);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-100 font-sans dark:bg-black">
      <Header />
      <main>
        <CourseDetailBanner course={course} />
        <CourseAboutSection about={course.about} />
        <CourseBenefitsSection benefits={course.benefits} />
        <CourseInstructorsSection instructors={course.instructors} />
        <CourseSyllabusSection syllabus={course.syllabus} />
        <CoursePricingSection price={course.price} title={course.title} />
      </main>
      <LandingFooter />
    </div>
  );
}
