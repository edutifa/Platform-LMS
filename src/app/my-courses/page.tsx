import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "My Courses",
};

type Course = {
  id: number;
  title: string;
  progress: number; // 0..100
  imageSrc: string;
};

const myCourses: Course[] = [
  {
    id: 1,
    title: "Fullstack Web Development",
    progress: 80,
    imageSrc: "/assets/images/sample-banner-course-1.png",
  },
  {
    id: 2,
    title: "Mobile Development",
    progress: 100,
    imageSrc: "/assets/images/sample-banner-course-1.png",
  },
];

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Courses</CardTitle>
        <CardDescription>Your enrolled courses</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {myCourses.map((course) => (
            <Link
              key={course.id}
              href={`/course/detail/${course.id}`}
              className="block"
            >
              <Card className="overflow-hidden rounded-2xl border border-zinc-100 bg-white p-0 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 gap-0 py-0">
                <CardHeader className="p-0">
                  <div className="relative h-44 w-full">
                    <Image
                      src={course.imageSrc}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 px-5 py-4">
                  <CardTitle className="text-sm font-semibold">
                    {course.title}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Progress: {course.progress}%
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full mt-2">
                    <div
                      className="h-2 bg-blue-600 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t border-zinc-100 pb-4 pt-3">
                  <Button size="sm">Lanjutkan</Button>
                  <div className="text-xs text-muted-foreground">
                    {course.progress}%
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
