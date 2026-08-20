import Link from "next/link";
import Image from "next/image";
import { ASSETS, CDE, NAV_LINKS } from "@/lib/config";
import TopBar from "@/components/TopBar";

export default function Header() {
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 bg-cde-azul text-white shadow-md">
        <div className="cde-gradient h-1.5 w-full" aria-hidden />
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white/15 ring-2 ring-white/30">
              <Image
                src={ASSETS.logo}
                alt={`${CDE.name} - escudo`}
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
            </span>
            <div className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight">
                Deportivo Español
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-widest text-white/70">
                Club Deportivo Español · 1956
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-white/85 transition-colors hover:bg-white/15 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={CDE.telefonoLink}
              className="hidden items-center gap-1.5 rounded-md border border-white/30 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 lg:flex"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="hidden xl:inline">{CDE.telefono}</span>
            </a>
            <Link
              href="/socios"
              className="rounded-md px-4 py-2 text-sm font-bold text-white transition-colors cde-gradient hover:bg-cde-rojo-oscuro"
            >
              Asociate
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
