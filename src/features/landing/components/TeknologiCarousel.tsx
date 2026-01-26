"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const techStack = [
  { id: "laravel", name: "Laravel" },
  { id: "go", name: "Go" },
  { id: "flutter", name: "Flutter" },
  { id: "react", name: "React" },
  { id: "dotnet", name: ".NET" },
  { id: "vuedotjs", name: "Vue.js" },
  { id: "svelte", name: "Svelte" },
  { id: "python", name: "Python" },
  { id: "javascript", name: "JavaScript" },
  { id: "ruby", name: "Ruby" },
  { id: "php", name: "PHP" },
  { id: "swift", name: "Swift" },
  { id: "kotlin", name: "Kotlin" },
  { id: "docker", name: "Docker" },
];

export function CarouselPlugin() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      Autoplay({
        delay: 1200,
        stopOnInteraction: false,
        stopOnFocusIn: false,
      }),
    ]
  );

  return (
    <section className="container mx-auto px-4 py-10 md:pt-22 max-w-6xl">
      <div className="text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">
          Edutifa Di Dukung Oleh
        </p>
        <h3 className="mt-2 text-2xl font-bold text-foreground">
          Teknologi Terbaru dan Terupdate.
        </h3>
      </div>

      {/* Wrapper relatif untuk overlay fade */}
      <div className="flex justify-center relative">
        {/* Fade kiri */}
        <div className="absolute left-0 top-0 h-full w-32 bg-linear-to-r from-zinc-100 dark:from-neutral-950 to-transparent z-10 pointer-events-none" />

        {/* Fade kanan */}
        <div className="absolute right-0 top-0 h-full w-32 bg-linear-to-l from-zinc-100 dark:from-neutral-950 to-transparent z-10 pointer-events-none" />

        {/* Embla Carousel */}
        <div className="w-full max-w-6xl overflow-hidden" ref={emblaRef}>
          <div className="flex ml-4">
            {techStack.map((tech) => (
              <div key={tech.id} className="pl-1 basis-1/6 shrink-0">
                <div className="p-1">
                  <Card className="bg-transparent border-0 shadow-none">
                    <CardContent className="flex items-center justify-center p-1 h-24">
                      <Image
                        src={`https://cdn.simpleicons.org/${tech.id}`}
                        alt={tech.name}
                        width={48}
                        height={48}
                        unoptimized
                        className="object-contain grayscale hover:grayscale-0 transition-all duration-300 w-auto h-15 hover:scale-110"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
