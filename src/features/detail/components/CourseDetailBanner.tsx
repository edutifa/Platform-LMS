import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { CourseDetail } from "@/features/detail/dto/DetailDTO";

type Props = {
  course: CourseDetail;
};

export function CourseDetailBanner({ course }: Props) {
  return (
    <section className="relative border-b border-border/60">
      <div
        className="bg-linear-to-br from-blue-50 pt-14 md:pt-24 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
        style={{
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:items-center md:py-14">
          <div className="flex-1 space-y-4">
            <p className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Kelas Online
            </p>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              {course.title}
            </h1>
            <p className="max-w-xl text-sm text-muted-foreground md:text-base">
              {course.shortDescription}
            </p>
            <div className="mt-4 flex flex-wrap items-baseline gap-3">
              <span className="text-2xl font-semibold text-foreground md:text-3xl">
                {course.price.current}
              </span>
              {course.price.original && (
                <span className="text-sm text-red-400 line-through">
                  {course.price.original}
                </span>
              )}
              {course.price.discountLabel && (
                <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  {course.price.discountLabel}
                </span>
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                className="bg-[#004aad] text-sm font-semibold text-white hover:bg-blue-700 md:text-base"
                asChild
              >
                <a href="#biaya">Beli Sekarang</a>
              </Button>
            </div>
          </div>

          <div className="flex flex-1 justify-end">
            <div className="w-full max-w-xl">
              <Image
                src={course.bannerImage}
                alt={course.title}
                width={1200}
                height={400}
                className="h-auto w-full rounded-3xl bg-slate-900/5 object-contain shadow-lg ring-1 ring-border/70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
