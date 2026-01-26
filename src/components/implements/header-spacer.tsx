"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function HeaderSpacer() {
  const pathname = usePathname();

  const accountPaths = [
    "/my-resume",
    "/my-courses",
    "/my-transactions",
    "/my-profile",
    "/signup",
    "/signup/profile",
  ];

  const showSpacer = accountPaths.some(
    (p) => pathname === p || pathname?.startsWith(p + "/"),
  );
  if (!showSpacer) return null;

  // use responsive height so header overlap is handled on mobile/desktop
  return <div className="h-20 md:h-28" />;
}
