"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { setDraft } from "@/lib/dummyAuth";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const draft = { name, email, password };
    try {
      setDraft(draft);
    } catch {
      // ignore
    }
    // Redirect to profile step
    router.push("/profile");
  }

  return (
    <div className="min-h-screen flex">
      {/* Left image (hidden on small screens) */}
      <div className="hidden md:flex w-1/2 relative bg-muted">
        <Image
          src="/assets/images/background-it.jpg"
          alt="Signup background"
          fill
          className="object-cover"
        />
      </div>

      {/* Right form */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md bg-background rounded-lg p-8 shadow">
          <h1 className="text-2xl font-semibold mb-4">Daftar</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Nama lengkap</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Nama lengkap"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="email@domain.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Minimal 8 karakter"
              />
            </div>

            <div className="pt-2">
              <Button type="submit" className="w-full">
                Daftar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
