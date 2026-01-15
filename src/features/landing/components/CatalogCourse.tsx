"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Course = {
  id: number;
  title: string;
  price: string;
  originalPrice: string;
  discountLabel: string;
  imageSrc: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Full Stack Next JS : Realtime Point Of Sale Apps",
    price: "Rp 345.000",
    originalPrice: "Rp 1.500.000",
    discountLabel: "77% Off",
    imageSrc: "/assets/images/sample-banner-course.png",
  },
  {
    id: 2,
    title: "Mastering React & TypeScript untuk Production",
    price: "Rp 279.000",
    originalPrice: "Rp 1.200.000",
    discountLabel: "76% Off",
    imageSrc: "/assets/images/sample-banner-course.png",
  },
  {
    id: 3,
    title: "Fundamental Tailwind CSS untuk Frontend Developer",
    price: "Rp 199.000",
    originalPrice: "Rp 850.000",
    discountLabel: "77% Off",
    imageSrc: "/assets/images/sample-banner-course.png",
  },
];

export function CatalogCourse() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Katalog Kelas Populer
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {courses.map((course) => (
          <Link key={course.id} href={`/detail/${course.id}`} className="block">
            <Card className="overflow-hidden rounded-2xl border border-zinc-100 bg-white p-0 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 gap-0 py-0">
              <CardHeader className="p-0">
                <div className="relative h-44 w-full">
                  <Image
                    src={course.imageSrc}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-blue-600 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
                    {course.discountLabel}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 px-5 py-4">
                <CardTitle className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {course.title}
                </CardTitle>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-1 border-t border-zinc-100 pb-5 pt-3 dark:border-zinc-800">
                <div className="text-xs font-medium text-red-400 line-through dark:text-red-300">
                  {course.originalPrice}
                </div>
                <div className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {course.price}
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CatalogCourse;
