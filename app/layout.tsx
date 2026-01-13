import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeScript from "./components/ThemeScript";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

// Configuración para ClashDisplay
const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-clash-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Herbaria - Tu elección",
  description: "Vivero digital de plantas con foco en bienestar, conocimiento y uso consciente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${clashDisplay.variable} ${clashDisplay.className}`}
      >
        <ThemeScript />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
