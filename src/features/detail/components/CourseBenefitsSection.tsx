type Props = {
  benefits: string[];
};

export function CourseBenefitsSection({ benefits }: Props) {
  if (!benefits.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-lg font-semibold">Benefit yang Didapat</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={benefit}
            className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-card px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-md"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-primary md:text-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[11px] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>Benefit {index + 1}</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground md:text-sm">
              {benefit}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
