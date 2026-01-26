"use client";

import React from "react";
import Link from "next/link";
import { FileText, BookOpen, CreditCard, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { getUser } from "@/lib/dummyAuth";

export default function LeftSidebar() {
  const user = getUser();

  const items = [
    { href: "/my-resume", icon: FileText, label: "My Resume" },
    { href: "/my-courses", icon: BookOpen, label: "My Course" },
    { href: "/my-transactions", icon: CreditCard, label: "My Transaction" },
    { href: "/my-profile", icon: User, label: "My Profile" },
  ];

  const pathname = usePathname();

  // Only show the left sidebar on these account pages
  const accountPaths = [
    "/my-resume",
    "/my-courses",
    "/my-transactions",
    "/my-profile",
  ];
  const showSidebar = accountPaths.some(
    (p) => pathname === p || pathname?.startsWith(p + "/"),
  );
  if (!showSidebar) return null;

  return (
    <aside className="hidden md:block">
      <nav className="sticky top-28 z-40">
        <div className="px-2">
          <div className="w-56 bg-white rounded-2xl shadow-lg p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                {user?.avatarUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {(user?.name || "U").slice(0, 1)}
                  </div>
                )}
              </div>
              <div>
                <div className="text-sm font-semibold">
                  {user?.name || "Nama Pengguna"}
                </div>
                <div className="text-xs text-muted-foreground">
                  Mobile App Developer
                </div>
              </div>
            </div>

            <ul className="flex flex-col gap-1">
              {items.map((item) => {
                const Icon = item.icon;
                const href = user ? item.href : "/signup";
                const isActive =
                  pathname === item.href ||
                  pathname?.startsWith(item.href + "/");
                return (
                  <li key={item.href}>
                    <Link
                      href={href}
                      className={
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm " +
                        (isActive
                          ? "bg-blue-50 text-blue-700 font-medium"
                          : "text-muted-foreground hover:bg-blue-50")
                      }
                    >
                      <span
                        className={
                          "p-2 rounded-md " +
                          (isActive ? "bg-blue-100" : "bg-blue-50")
                        }
                      >
                        <Icon
                          className={
                            "w-4 h-4 " +
                            (isActive ? "text-blue-700" : "text-blue-600")
                          }
                        />
                      </span>
                      <span className="flex-1">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </aside>
  );
}
