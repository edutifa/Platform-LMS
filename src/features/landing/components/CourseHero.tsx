"use client";

import { Button } from "@/components/ui/button";

export function CourseHero() {
  return (
    <section>
      <div
        className="bg-white"
        style={{
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 pt-28 md:pt-32 pb-20 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-zinc-900">
            Katalog Kelas
          </h1>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
            Pilih kelas yang sesuai dengan tujuanmu — ringkas, praktis, dan
            langsung bisa dipraktekkan.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <Button size="lg" className="bg-blue-600 text-white">
              Telusuri Kelas
            </Button>
            <Button variant="ghost" size="lg">
              Semua Kategori
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseHero;
