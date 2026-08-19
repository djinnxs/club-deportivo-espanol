import Link from "next/link";
import Image from "next/image";
import { ASSETS, CDE, NAV_LINKS } from "@/lib/config";

export default function Header() {
  return (
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
          <Link
            href="/socios"
            className="rounded-md px-4 py-2 text-sm font-bold text-white transition-colors cde-gradient hover:bg-cde-rojo-oscuro"
          >
            Asociate
          </Link>
        </div>
      </div>
    </header>
  );
}