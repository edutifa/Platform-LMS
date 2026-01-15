"use client";

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
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Crown } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-center w-full fixed top-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="flex flex-row items-center justify-between p-2 w-full max-w-6xl">
        {/* Logo */}
        <div className="w-32 md:w-42">
          <a href="/" className="flex flex-row items-center gap-1">
            <img
              src="/assets/logos/logo-blue.svg"
              alt="Logo Edutifa"
              className="w-full h-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-3">
            <NavigationMenuItem>
              <NavigationMenuLink href="/modul" className="px-2 py-1">
                Beranda
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Kelas Tersedia</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-fit p-2">
                <div className="flex flex-col gap-1 px-2">
                  <NavigationMenuLink
                    href="/kelas"
                    className="flex flex-row items-center gap-1 px-3 py-1.5 whitespace-nowrap hover:bg-accent rounded-md"
                  >
                    Fullstack Web Development
                    <Crown className="inline-block w-4 h-4 ml-1 text-blue-500" />
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    href="/kelas"
                    className="flex flex-row items-center gap-1 px-3 py-1.5 whitespace-nowrap hover:bg-accent rounded-md"
                  >
                    Mobile Development
                    <Crown className="inline-block w-4 h-4 ml-1 text-blue-500" />
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/modul" className="px-2 py-1">
                Bootcamp
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/tentang" className="px-2 py-1">
                Tentang
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Section: Stats + Mode Toggle + Hamburger */}
        <div className="flex items-center justify-end gap-2 md:w-42">
          <div className="flex items-center gap-1 px-4 py-2">
            <Crown className="h-4 w-4 text-blue-500 dark:text-blue-400" />
            <div className="flex -space-x-1">
              <Avatar className="h-5 w-5 ring-2 ring-background grayscale">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="h-5 w-5 ring-2 ring-background grayscale">
                <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar className="h-5 w-5 ring-2 ring-background grayscale">
                <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
            <span className="text-xs font-medium text-primary">400+</span>
          </div>

          <ModeToggle />

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
            <a
              href="/modul"
              className="px-3 py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </a>
            <div>
              <button
                className="w-full text-left px-3 py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kelas Tersedia
              </button>
              <div className="mt-1 pl-3 space-y-1">
                <a
                  href="/kelas"
                  className="flex items-center gap-1 px-3 py-1.5 text-sm hover:bg-accent rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fullstack Web Development
                  <Crown className="w-4 h-4 text-blue-500" />
                </a>
                <a
                  href="/kelas"
                  className="flex items-center gap-1 px-3 py-1.5 text-sm hover:bg-accent rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mobile Development
                  <Crown className="w-4 h-4 text-blue-500" />
                </a>
              </div>
            </div>
            <a
              href="/modul"
              className="px-3 py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Bootcamp
            </a>
            <a
              href="/tentang"
              className="px-3 py-2 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang
            </a>
          </div>
        </div>
      )}
    </div>
  );
}