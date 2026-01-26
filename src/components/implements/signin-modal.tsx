"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

type Props = {
  open: boolean;
  onClose: () => void;
  onSignIn?: (data: { email: string; password: string }) => void;
};

export default function SignInModal({ open, onClose, onSignIn }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!open) return null;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    onSignIn?.({ email, password });
    onClose();
  }
  const modal = (
    <div className="fixed inset-0 z-9999 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-background rounded-md shadow-lg w-full max-w-md mx-4 p-6 max-h-[90vh] overflow-auto">
        <button
          className="absolute top-3 right-3 text-muted-foreground"
          onClick={onClose}
          aria-label="Close"
        >
          <X />
        </button>

        <h3 className="text-lg font-semibold mb-4">Sign in</h3>

        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
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
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <Button type="submit">Sign in</Button>

            <Button asChild variant="ghost" size="sm">
              <Link href="/signup">Create new account</Link>
            </Button>
          </div>

          <div className="pt-2 border-t mt-2">
            <div className="flex justify-center">
              <button
                type="button"
                aria-label="Sign in with Google"
                className="flex items-center gap-2 px-3 py-2 rounded-md border"
              >
                {/* Simple Google 'G' svg icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 533.5 544.3"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block"
                >
                  <path
                    fill="#4285F4"
                    d="M533.5 278.4c0-18.7-1.5-36.8-4.3-54.3H272v102.8h146.9c-6.3 34-25.6 62.8-54.6 82v68h88.2c51.6-47.5 81-117.6 81-198.5z"
                  />
                  <path
                    fill="#34A853"
                    d="M272 544.3c73.6 0 135.5-24.4 180.6-66.2l-88.2-68c-24.5 16.5-55.8 26.3-92.4 26.3-70.9 0-131-47.9-152.3-112.2H29.7v70.6C74.6 491.9 168.1 544.3 272 544.3z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M119.7 323.9c-10.9-32.8-10.9-68.2 0-101l-89.9-70.6C6.9 198 0 234.1 0 272s6.9 74 29.8 119.7l89.9-67.8z"
                  />
                  <path
                    fill="#EA4335"
                    d="M272 107.7c39.9 0 75.8 13.7 104 40.9l78-78C406.8 24.7 346 0 272 0 168.1 0 74.6 52.4 29.7 132.8l89.9 70.6C141 155.6 201.1 107.7 272 107.7z"
                  />
                </svg>
                <span className="text-sm font-medium">Masuk / Daftar</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

  return typeof document !== "undefined"
    ? createPortal(modal, document.body)
    : null;
}
