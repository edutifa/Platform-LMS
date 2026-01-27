"use client";

import React, { useRef, useState } from "react";
import { getUser } from "@/lib/dummyAuth";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Page() {
  const user = getUser();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [goal, setGoal] = useState(user?.personalGoal || "");
  const [job, setJob] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [avatarPreview, setAvatarPreview] = useState<string | null>(
    user?.avatarUrl || null,
  );
  const fileRef = useRef<HTMLInputElement | null>(null);

  // dummy stored password (not real) — reveal only last 2 chars
  const storedPassword = "verysecretA2";
  const maskedPassword =
    "*".repeat(Math.max(0, storedPassword.length - 2)) +
    storedPassword.slice(-2);
  const [newPassword, setNewPassword] = useState("");
  const [showChangeModal, setShowChangeModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSelectAvatar() {
    fileRef.current?.click();
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setAvatarPreview(URL.createObjectURL(f));
  }

  // UI-only: no persistence
  function handleSaveProfile() {
    // intentionally empty — UI-only per request
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>My Profile</CardTitle>
        <CardDescription>Account Details</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="size-12">
              {avatarPreview ? (
                <AvatarImage src={avatarPreview} alt={name || "avatar"} />
              ) : (
                <AvatarFallback>{(name || "U").slice(0, 1)}</AvatarFallback>
              )}
            </Avatar>
            <div className="flex flex-col">
              <Button variant="outline" size="sm" onClick={handleSelectAvatar}>
                Change Avatar
              </Button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFile}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-muted-foreground">Nama</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800"
            />
          </div>

          <div>
            <label className="block text-xs text-muted-foreground">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800"
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Change Password</h3>
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <label className="block text-xs text-muted-foreground">
                  Password
                </label>
                <input
                  type="text"
                  value={maskedPassword}
                  disabled
                  className="w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800 font-mono disabled:opacity-80"
                />
              </div>
              <div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowChangeModal(true)}
                >
                  Change Password
                </Button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs text-muted-foreground">
              My Goal
            </label>
            <input
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800"
            />
          </div>

          <div>
            <label className="block text-xs text-muted-foreground">
              Pekerjaan
            </label>
            <input
              value={job}
              onChange={(e) => setJob(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800"
            />
          </div>

          <div>
            <label className="block text-xs text-muted-foreground">
              Nomor HP
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800"
            />
          </div>

          <div>
            <label className="block text-xs text-muted-foreground">Kota</label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800"
            />
          </div>

          <div>
            <label className="block text-xs text-muted-foreground">
              Negara
            </label>
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800"
            />
          </div>

          <div className="mt-2">
            <Button variant="default" size="sm" onClick={handleSaveProfile}>
              Save
            </Button>
          </div>
          {showChangeModal && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 flex items-center justify-center"
            >
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setShowChangeModal(false)}
              />
              <div className="relative z-10 w-full max-w-md mx-4">
                <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-medium mb-3">Change Password</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-muted-foreground">
                        Current Password
                      </label>
                      <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800"
                        autoFocus
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground">
                        New Password
                      </label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800"
                      />
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowChangeModal(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => {
                          if (newPassword !== confirmPassword) {
                            alert(
                              "New password and confirmation do not match.",
                            );
                            return;
                          }
                          // UI-only: do not persist. Close modal and clear inputs.
                          setShowChangeModal(false);
                          setCurrentPassword("");
                          setNewPassword("");
                          setConfirmPassword("");
                        }}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
