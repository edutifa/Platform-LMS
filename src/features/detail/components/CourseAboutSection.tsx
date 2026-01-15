type Props = {
  about: string;
};

export function CourseAboutSection({ about }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-lg font-semibold">Tentang Course</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
        {about}
      </p>
    </section>
  );
}
