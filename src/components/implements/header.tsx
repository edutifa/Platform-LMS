"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../ui/mode-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SignInModal from "./signin-modal";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignOpen, setIsSignOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="flex justify-center w-full fixed top-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="flex flex-row items-center justify-between p-2 w-full max-w-6xl">
        {/* Logo */}
        <div className="w-32 md:w-42">
          <Link href="/" className="flex flex-row items-center gap-1">
            <Image
              src="/assets/logos/logo-white.svg"
              alt="Logo Edutifa"
              width={160}
              height={40}
              className="hidden dark:block"
            />
            <Image
              src="/assets/logos/logo-blue.svg"
              alt="Logo Edutifa"
              width={160}
              height={40}
              className="dark:hidden"
            />
          </Link>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-3">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="px-2 py-1">
                Beranda
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Program</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-fit p-2">
                <div className="flex flex-col gap-1 px-2">
                  <NavigationMenuLink
                    href="/course"
                    className="flex flex-row items-center gap-1 px-3 py-1.5 whitespace-nowrap hover:bg-accent rounded-md"
                  >
                    Online Course
                    <Crown className="inline-block w-4 h-4 ml-2 text-blue-500" />
                  </NavigationMenuLink>

                  <NavigationMenuLink
                    href="/bootcamp"
                    className="flex flex-row items-center justify-between gap-1 px-3 py-1.5 whitespace-nowrap hover:bg-accent rounded-md"
                  >
                    <span className="flex items-center gap-2">
                      Bootcamp
                      <Crown className="inline-block w-4 h-4 text-blue-500" />
                    </span>
                    <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5">
                      Segera Hadir
                    </span>
                  </NavigationMenuLink>

                  <NavigationMenuLink
                    href="/corporate"
                    className="flex flex-row items-center justify-between gap-1 px-3 py-1.5 whitespace-nowrap hover:bg-accent rounded-md"
                  >
                    <span className="flex items-center gap-2">
                      Corporate Training
                      <Crown className="inline-block w-4 h-4 text-blue-500" />
                    </span>
                    <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5">
                      Segera Hadir
                    </span>
                  </NavigationMenuLink>

                  <NavigationMenuLink
                    href="/sertifikasi"
                    className="flex flex-row items-center justify-between gap-1 px-3 py-1.5 whitespace-nowrap hover:bg-accent rounded-md"
                  >
                    <span className="flex items-center gap-2">
                      Sertifikasi
                      <Crown className="inline-block w-4 h-4 text-blue-500" />
                    </span>
                    <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5">
                      Segera Hadir
                    </span>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/informasi-kontak"
                className="px-2 py-1"
              >
                Informasi &amp; Kontak
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Section: Mode Toggle + Auth buttons + Hamburger */}
        <div className="flex items-center justify-end gap-2">
          <ModeToggle />

          {/* Temporarily hide original auth buttons/design */}
          {/*
          <div className="hidden sm:flex gap-2 items-center ml-2">
            <Button asChild variant="outline" size="sm">
              <Link href="/signup">Sign up</Link>
            </Button>
            <Button size="sm" onClick={() => setIsSignOpen(true)}>
              Sign in
            </Button>
          </div>
          */}

          {/* Temporary profile button (shows name + avatar). Clicking opens account menu. */}
          <div className="hidden sm:flex items-center gap-2 ml-2 relative">
            <button
              className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-accent"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              aria-expanded={isProfileOpen}
              aria-label="Account menu"
            >
              <Image
                src="/assets/images/photo-profile.png"
                alt="avatar"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="text-sm font-medium">Halo, Budi</span>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-popover border rounded-md shadow-md z-50">
                <a
                  href="/my-courses"
                  className="block px-4 py-2 text-sm hover:bg-accent"
                  onClick={() => setIsProfileOpen(false)}
                >
                  My Courses
                </a>
                <a
                  href="/my-resume"
                  className="block px-4 py-2 text-sm hover:bg-accent"
                  onClick={() => setIsProfileOpen(false)}
                >
                  My Resume
                </a>
                <a
                  href="/my-transactions"
                  className="block px-4 py-2 text-sm hover:bg-accent"
                  onClick={() => setIsProfileOpen(false)}
                >
                  My Transactions
                </a>
                <a
                  href="/my-profile"
                  className="block px-4 py-2 text-sm hover:bg-accent"
                  onClick={() => setIsProfileOpen(false)}
                >
                  My Profile
                </a>
                <button
                  className="w-full text-left px-4 py-2 text-sm hover:bg-accent"
                  onClick={() => {
                    console.log("sign out (stub)");
                    setIsProfileOpen(false);
                  }}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>

          {/* Hamburger Button (Mobile Only) */}
          <button
            className="md:hidden ml-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu – hanya muncul di layar kecil dan saat dibuka */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-t z-50">
          <div className="flex flex-col p-4 space-y-3 max-w-4xl mx-auto w-full">
            <link
              href="/"
              className="px-3 py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </link>

            <div>
              <button
                className="w-full text-left px-3 py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Program
              </button>
              <div className="mt-1 pl-3 space-y-1">
                <a
                  href="/course"
                  className="block px-3 py-1.5 text-sm hover:bg-accent rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    Online Course
                    <Crown className="w-4 h-4 text-blue-500" />
                  </span>
                </a>
                <a
                  href="/bootcamp"
                  className="flex items-center justify-between gap-2 px-3 py-1.5 text-sm hover:bg-accent rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    Bootcamp
                    <Crown className="w-4 h-4 text-blue-500" />
                  </span>
                  <span className="inline-flex items-center rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5">
                    Segera Hadir
                  </span>
                </a>
                <a
                  href="/corporate"
                  className="flex items-center justify-between gap-2 px-3 py-1.5 text-sm hover:bg-accent rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    Corporate Training
                    <Crown className="w-4 h-4 text-blue-500" />
                  </span>
                  <span className="inline-flex items-center rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5">
                    Segera Hadir
                  </span>
                </a>
                <a
                  href="/sertifikasi"
                  className="flex items-center justify-between gap-2 px-3 py-1.5 text-sm hover:bg-accent rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    Sertifikasi
                    <Crown className="w-4 h-4 text-blue-500" />
                  </span>
                  <span className="inline-flex items-center rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5">
                    Segera Hadir
                  </span>
                </a>
              </div>
            </div>

            <a
              href="/informasi-kontak"
              className="px-3 py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Informasi &amp; Kontak
            </a>
          </div>
        </div>
      )}
      <SignInModal
        open={isSignOpen}
        onClose={() => setIsSignOpen(false)}
        onSignIn={(data) => console.log("signin", data)}
      />
    </div>
  );
}
