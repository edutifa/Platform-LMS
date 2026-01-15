import type { CourseChapter } from "@/features/detail/dto/DetailDTO";

type Props = {
  syllabus: CourseChapter[];
};

export function CourseSyllabusSection({ syllabus }: Props) {
  if (!syllabus.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-lg font-semibold">Materi yang Akan Dipelajari</h2>
      <div className="mt-4 space-y-3">
        {syllabus.map((chapter) => (
          <div
            key={chapter.id}
            className="rounded-2xl border border-border/80 bg-card px-4 py-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Bab {chapter.id}. {chapter.title}
                </p>
                {chapter.summary && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {chapter.summary}
                  </p>
                )}
              </div>
            </div>
            {chapter.lessons?.length ? (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
                {chapter.lessons.map((lesson) => (
                  <li key={lesson}>{lesson}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
