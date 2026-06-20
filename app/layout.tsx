import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MotiRam Khillare — Full Stack Developer Portfolio",
  description:
    "Portfolio of MotiRam Khillare, a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View projects, skills, and get in touch.",
  keywords: [
    "MotiRam Khillare",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Developer",
    "Node.js",
    "TypeScript",
  ],
  authors: [{ name: "MotiRam Khillare" }],
  openGraph: {
    title: "MotiRam Khillare — Full Stack Developer",
    description:
      "Passionate Full Stack Developer building elegant web applications with modern technologies.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
