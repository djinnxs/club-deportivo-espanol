import Link from "next/link";
import Image from "next/image";
import { ASSETS, CDE, NAV_LINKS } from "@/lib/config";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="mt-auto text-white">
      <div className="cde-gradient">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-4 py-6">
          <span className="text-xs font-bold uppercase tracking-widest text-white/70">
            Sponsors
          </span>
          {Object.entries(ASSETS.sponsors).map(([key, src]) => (
            <Image
              key={key}
              src={src}
              alt={`Sponsor ${key}`}
              width={120}
              height={40}
              className="h-10 w-auto rounded bg-white/90 object-contain px-2"
            />
          ))}
        </div>
      </div>

      <div className="bg-cde-rojo-oscuro">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white/15 ring-2 ring-white/30">
                <Image
                  src={ASSETS.logo}
                  alt={`${CDE.name} - escudo`}
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain"
                />
              </span>
              <div>
                <p className="font-extrabold">Deportivo Español</p>
                <p className="text-xs text-white/70">Fundado en 1956</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
              Un club con historia, pasión y la Furia Roja en el corazón del
              fútbol argentino. Estadio Nueva España, Buenos Aires.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-white/70">
              Secciones
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-white/70">
              Redes
            </p>
            <div className="flex gap-3">
              <a
                href={CDE.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-md bg-white/15 p-2 transition-colors hover:bg-white/30"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={CDE.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-md bg-white/15 p-2 transition-colors hover:bg-white/30"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={CDE.redes.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="rounded-md bg-white/15 p-2 transition-colors hover:bg-white/30"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-white/70">
              {new Date().getFullYear()} · {CDE.name}. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}