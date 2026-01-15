"use client";

import { Button } from "@/components/ui/button";
import { RotatingText } from "@/components/ui/shadcn-io/rotating-text";
import { InfoIcon, UserCheck } from "lucide-react";
import Image from "next/image";

export function LandingHero() {
  return (
    <section className="container mx-auto px-4 pt-24 md:pt-32 max-w-6xl">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Kiri - Konten Teks */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            <InfoIcon className="h-4 w-4 text-[#004aad]" />
            Belajar Teknologi Terkini
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Edutifa Bakal Bantu Kamu
          </h1>
          <RotatingText
            text={[
              "Belajar Fundamental",
              "Belajar Buat Website",
              "Belajar Vibe Coding",
            ]}
            duration={1500}
            className="text-[#004aad] text-3xl sm:text-4xl md:text-5xl font-bold text-center"
          />
          <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
            Platform belajar coding, data, dan teknologi terkini dengan materi
            praktis, proyek nyata, dan mentor berpengalaman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#004aad] hover:bg-blue-700 text-white"
            >
              Mulai Belajar Sekarang
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <UserCheck className="mr-2 h-4 w-4" />
              Lihat Demo Kelas
            </Button>
          </div>
        </div>

        {/* Kanan - Gambar + Floating Cards */}
        <div className="flex-1 flex justify-end">
          <div className="relative w-full max-w-md aspect-4/3">
            <Image
              src="./assets/images/hero.svg" // Ganti dengan path gambar Anda
              alt="Ilustrasi belajar di Edutifa"
              fill
              className="object-contain"
              unoptimized
              sizes="(min-width: 768px) 400px, 100vw"
            />

            {/* Floating cards - hanya tampil di md ke atas */}
            <div className="hidden md:flex floating-card floating-card-left">
              <span className="text-xs font-medium text-muted-foreground">
                Belajar jadi
              </span>
              <span className="text-sm font-semibold text-foreground">
                Web Developer
              </span>
            </div>

            <div className="hidden md:flex floating-card floating-card-top-right">
              <span className="text-xs font-medium text-muted-foreground">
                Level up ke
              </span>
              <span className="text-sm font-semibold text-foreground">
                AI Engineer
              </span>
            </div>

            <div className="hidden md:flex floating-card floating-card-bottom-right">
              <span className="text-xs font-medium text-muted-foreground">
                Siap kerja sebagai
              </span>
              <span className="text-sm font-semibold text-foreground">
                Mobile Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingHero;
