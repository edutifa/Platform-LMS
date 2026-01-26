import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../shared/styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "@/components/implements/header";
import LeftSidebar from "@/components/implements/left-sidebar";
import HeaderSpacer from "@/components/implements/header-spacer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Edutifa - Edukasi Teknologi Informatika",
  description: "Platform pembelajaran online untuk teknologi informatika.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="./assets/logos/icon-blue.svg" sizes="any" />
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased bg-zinc-100 dark:bg-black font-sans overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {/* conditional spacer so only account/signup pages get the extra top offset */}
          <HeaderSpacer />
          <div className="container mx-auto max-w-6xl">
            <div className="flex gap-6">
              <LeftSidebar />
              <div className="flex-1">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
