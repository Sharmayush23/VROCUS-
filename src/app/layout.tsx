import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VROCUS - Premium Digital Agency",
  description: "GrowthSchool-inspired portfolio and services website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body
        className="antialiased flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-white selection:text-black"
        suppressHydrationWarning
      >
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow w-full relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
