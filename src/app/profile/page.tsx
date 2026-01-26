"use client";

import React, { useState } from "react";
import { getDraft, setUser, setDraft } from "@/lib/dummyAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Draft = { name?: string; email?: string; password?: string } | null;

const recommendedGoals = [
  "Belajar Web Development",
  "Belajar Mobile Development",
  "Belajar Data Science",
  "Belajar AI / Machine Learning",
  "Pindah karier ke Software Engineer",
  "Meningkatkan skill untuk promosi",
];

export default function ProfileStep() {
  const router = useRouter();
  const [draft] = useState<Draft>(() => {
    try {
      return getDraft();
    } catch {
      return null;
    }
  });

  const [avatarUrl, setAvatarUrl] = useState("");
  const [goal, setGoal] = useState(recommendedGoals[0]);

  if (!draft) {
    // If no draft present, redirect back to signup step
    if (typeof window !== "undefined") router.push("/signup");
    return null;
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();

    const user = {
      name: draft?.name || "",
      email: draft?.email || "",
      avatarUrl: avatarUrl || undefined,
      personalGoal: goal,
    };

    try {
      setUser(user);
      setDraft(null);
    } catch {
      // ignore
    }

    router.push("/kelas");
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg overflow-hidden shadow">
        <div className="hidden md:block relative bg-gray-100">
          {/* Decorative image or illustration (update asset as desired) */}
          <Image
            src="/assets/images/hero-left.jpg"
            alt="illustration"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Lengkapi profil</h2>

          <form onSubmit={submit} className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                {avatarUrl ? (
                  <AvatarImage src={avatarUrl} alt={draft.name || "Avatar"} />
                ) : (
                  <AvatarFallback>
                    {(draft.name || "U").slice(0, 2)}
                  </AvatarFallback>
                )}
              </Avatar>

              <div className="flex-1">
                <label className="block text-sm mb-1">Avatar URL</label>
                <input
                  value={avatarUrl}
                  onChange={(e) => setAvatarUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Tujuan pribadi</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              >
                {recommendedGoals.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-2">
              <Button type="submit">Selesai</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
