"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ASSETS, CDE, NAV_LINKS } from "@/lib/config";
import TopBar from "@/components/TopBar";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg transition-all duration-300">
        <div className="cde-gradient h-1.5 w-full" aria-hidden />
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="flex h-13 w-13 items-center justify-center overflow-hidden rounded-full bg-[#C41E3A] border-2 border-[#D4AF37] shadow-md transition-transform group-hover:scale-105">
              <Image
                src={ASSETS.logo}
                alt={`${CDE.name} - Escudo`}
                width={48}
                height={48}
                className="h-10 w-10 object-contain drop-shadow"
              />
            </span>
            <div className="leading-tight">
              <span className="font-oswald text-xl font-bold tracking-tight text-[#C41E3A] block">
                DEPORTIVO ESPAÑOL
              </span>
              <span className="font-montserrat text-[11px] font-medium text-gray-500 uppercase tracking-wider block">
                Fundado en 1956 · Furia Roja
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link font-oswald text-sm font-bold uppercase tracking-wider text-gray-800 hover:text-[#C41E3A]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/socios"
              className="btn-primary rounded-lg px-5 py-2.5 font-oswald text-sm font-bold uppercase tracking-wider text-white border border-[#D4AF37]/40"
            >
              Hacete Socio
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden rounded-lg p-2 text-2xl text-[#C41E3A] hover:bg-gray-100 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-fade-in-up">
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-oswald text-base font-bold uppercase text-gray-800 hover:text-[#C41E3A] py-2 border-b border-gray-100"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/socios"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary text-center rounded-lg py-3 font-oswald text-sm font-bold uppercase tracking-wider text-white mt-2"
              >
                Hacete Socio
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
