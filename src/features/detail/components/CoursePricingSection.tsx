"use client";

import { Button } from "@/components/ui/button";
import type { CoursePrice } from "@/features/detail/dto/DetailDTO";
import { CheckCircle2 } from "lucide-react";

type Props = {
  price: CoursePrice;
  title: string;
};

export function CoursePricingSection({ price, title }: Props) {
  const includes: string[] = [
    "Akses penuh ke seluruh video dan materi",
    "Akses selamanya tanpa batas waktu",
    "Slide dan resource yang bisa diunduh",
    "Mini project untuk menambah portfolio",
    "Sertifikat digital setelah menyelesaikan kelas",
    "Mentor berpengalaman yang siap membantu",
  ];

  return (
    <section id="biaya" className="mx-auto max-w-6xl px-4 pb-12 pt-4">
      <h2 className="text-xl font-semibold text-foreground md:text-2xl">
        <span className="text-primary">Biaya</span> terjangkau untuk masa depan
        kamu
      </h2>

      <div className="mt-4 rounded-3xl border border-border bg-card/60 px-4 py-5 shadow-sm md:px-8 md:py-6">
        <div className="grid items-start gap-6 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)]">
          {/* Kiri: Benefit yang termasuk dalam biaya */}
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="text-[13px] md:text-sm">
              Investasi sekali bayar untuk mendapatkan akses seumur hidup ke
              kelas
              <span className="font-semibold text-foreground"> {title}</span>,
              lengkap dengan fasilitas berikut:
            </p>
            <ul className="mt-2 space-y-2">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-[13px] md:text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kanan: Box harga */}
          <div className="flex flex-col justify-between gap-3 rounded-2xl bg-card px-5 py-4 text-right shadow-sm ring-1 ring-border/70">
            <div className="flex flex-col items-end gap-1">
              {price.original && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="line-through text-muted-foreground/70">
                    {price.original}
                  </span>
                  {price.discountLabel && (
                    <span className="rounded-full bg-primary px-3 py-0.5 text-[11px] font-semibold text-primary-foreground">
                      Hemat {price.discountLabel}
                    </span>
                  )}
                </div>
              )}
              <p className="text-3xl font-bold text-primary md:text-4xl">
                {price.current}
              </p>
              {price.note && (
                <p className="text-[11px] text-muted-foreground">
                  {price.note}
                </p>
              )}
            </div>

            <div className="mt-2 h-px w-full bg-border/60" />

            <Button className="mt-2 w-full bg-[#004aad] text-sm font-semibold text-white hover:bg-blue-700 md:text-base">
              Beli Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
