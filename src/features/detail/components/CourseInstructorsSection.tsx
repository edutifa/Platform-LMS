import type { CourseInstructor } from "@/features/detail/dto/DetailDTO";

type Props = {
  instructors: CourseInstructor[];
};

export function CourseInstructorsSection({ instructors }: Props) {
  if (!instructors.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-lg font-semibold">Pengajar</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {instructors.map((instructor) => (
          <div
            key={instructor.name}
            className="rounded-2xl border border-border/80 bg-card px-4 py-3 shadow-sm"
          >
            <p className="text-sm font-semibold text-foreground">
              {instructor.name}
            </p>
            <p className="text-xs text-muted-foreground">{instructor.role}</p>
            {instructor.bio && (
              <p className="mt-2 text-xs text-muted-foreground/90">
                {instructor.bio}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
