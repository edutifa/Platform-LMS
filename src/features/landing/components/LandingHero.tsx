"use client";

import Image from "next/image";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-zinc-50 via-white to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900">
      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center gap-10 px-6 py-20 text-center md:flex-row md:items-start md:text-left">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-800">
            Platform LMS • Belajar Lebih Terarah
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-zinc-50">
            Tingkatkan skill Anda dengan
            <span className="bg-linear-to-r from-blue-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              kelas interaktif berkualitas.
            </span>
          </h1>
          <p className="max-w-xl text-balance text-sm text-zinc-600 sm:text-base dark:text-zinc-300">
            Akses ratusan kursus terkurasi, jalur belajar terstruktur, dan
            latihan praktik yang membantu Anda naik level lebih cepat. Belajar
            kapan saja, di mana saja.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:ring-offset-zinc-950">
              Mulai Belajar Sekarang
            </button>
            <button className="inline-flex items-center justify-center rounded-lg border border-zinc-200 px-6 py-2.5 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900">
              Lihat Katalog Kelas
            </button>
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-4 text-left text-xs text-zinc-600 sm:text-sm md:max-w-md dark:text-zinc-300">
            <div>
              <dt className="font-semibold text-zinc-800 dark:text-zinc-100">
                150+ Kursus
              </dt>
              <dd>Kelas dari mentor berpengalaman di industrinya.</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-800 dark:text-zinc-100">
                30K+ Siswa
              </dt>
              <dd>Belajar dan berkembang bersama komunitas aktif.</dd>
            </div>
          </dl>
        </div>

        <div className="relative mt-4 flex flex-1 justify-center md:mt-0">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-6 rounded-3xl bg-linear-to-tr from-blue-500/10 via-sky-400/5 to-emerald-300/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/80 p-4 shadow-xl backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
              <div className="flex items-center justify-between pb-3 text-xs text-zinc-500 dark:text-zinc-400">
                <span>Kelas yang sedang berlangsung</span>
                <span>Live</span>
              </div>
              <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900">
                <Image
                  src="/hero-illustration.png"
                  alt="Ilustrasi belajar online"
                  fill
                  className="object-cover opacity-80"
                  priority
                />
              </div>
              <div className="space-y-2 text-left">
                <p className="text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
                  UI/UX Design • Intermediate
                </p>
                <h2 className="text-sm font-semibold text-zinc-900 md:text-base dark:text-zinc-50">
                  Membangun Dashboard Analytics yang Intuitif
                </h2>
                <p className="text-xs text-zinc-600 md:text-sm dark:text-zinc-300">
                  Pelajari bagaimana menyusun layout, hirarki visual, dan
                  komponen interaktif untuk dashboard profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingHero;
