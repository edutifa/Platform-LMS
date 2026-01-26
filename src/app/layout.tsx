import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../shared/styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "@/components/implements/header";
import LeftSidebar from "@/components/implements/left-sidebar";

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
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {/* spacer equal to header height so fixed header doesn't overlap content */}
          <div className="h-28" />
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
