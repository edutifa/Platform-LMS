import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../shared/styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

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
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
