import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTopButton from "@/components/BackToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Club Deportivo Español | Furia Roja (Fundado en 1956)",
    template: "%s | Club Deportivo Español",
  },
  description:
    "Sitio oficial institucional del Club Deportivo Español de Buenos Aires (La Furia Roja). Historia, noticias, plantilla, estadio Nueva España y socios.",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 font-montserrat`}
      >
        <Header />
        <main className="flex min-h-screen flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTopButton />
      </body>
    </html>
  );
}
