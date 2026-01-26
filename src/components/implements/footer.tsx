// components/landing-footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

export function LandingFooter() {
  const pathname = usePathname();
  const isHome =
    pathname === "/" ||
    pathname === "" ||
    (!!pathname && pathname.startsWith("/course"));

  const content = (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Kolom 1: Brand & Deskripsi */}
        <div className="space-y-4">
          <Link href="/" className="flex flex-row items-center gap-1">
            <Image
              src="/assets/logos/logo-white.svg"
              alt="Logo Edutifa"
              width={160}
              height={40}
              className="hidden dark:block h-12 md:h-16 w-auto"
            />
            <Image
              src="/assets/logos/logo-blue.svg"
              alt="Logo Edutifa"
              width={160}
              height={40}
              className="dark:hidden h-12 md:h-16 w-auto"
            />
          </Link>
          <p className="text-sm font-semibold text-foreground">
            PT Edukasi Teknologi Informatika
          </p>
          <p className="text-sm text-muted-foreground">
            Jl. Jawa no 8b, Pekanbaru, Riau. Indonesia. 28285.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:hello@edutifa.id"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Kolom 2: Produk */}
        <div>
          <h4 className="font-semibold mb-4">Produk</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="/courses"
                className="hover:text-foreground transition-colors"
              >
                Kursus
              </Link>
            </li>
            <li>
              <Link
                href="/bootcamp"
                className="hover:text-foreground transition-colors"
              >
                Bootcamp
              </Link>
            </li>
            <li>
              <Link
                href="/mentorship"
                className="hover:text-foreground transition-colors"
              >
                Mentorship
              </Link>
            </li>
            <li>
              <Link
                href="/career"
                className="hover:text-foreground transition-colors"
              >
                Karier
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Perusahaan */}
        <div>
          <h4 className="font-semibold mb-4">Perusahaan</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="/about"
                className="hover:text-foreground transition-colors"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-foreground transition-colors"
              >
                Kontak
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-foreground transition-colors"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 4: Legal */}
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Syarat & Ketentuan
              </Link>
            </li>
            <li>
              <Link
                href="/refund"
                className="hover:text-foreground transition-colors"
              >
                Kebijakan Pengembalian
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Edutifa. Hak cipta dilindungi.
      </div>
    </div>
  );

  return (
    <footer className="border-t">
      {isHome ? (
        <div
          className="bg-background"
          style={{
            position: "relative",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            width: "100vw",
          }}
        >
          {content}
        </div>
      ) : (
        content
      )}
    </footer>
  );
}

export default LandingFooter;
