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
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
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
            <ul className="grid grid-cols-1 gap-2 text-sm">
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
              Estadísticas
            </p>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              <li>
                <a
                  href={CDE.enlacesExternos.scores365}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  365Scores · Equipo
                </a>
              </li>
              <li>
                <a
                  href={CDE.enlacesExternos.scores365Partidos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Calendario de partidos
                </a>
              </li>
              <li>
                <a
                  href={CDE.enlacesExternos.scores365Posiciones}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Tabla de posiciones
                </a>
              </li>
              <li>
                <a
                  href={CDE.enlacesExternos.scores365Fichajes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Fichajes
                </a>
              </li>
              <li>
                <a
                  href={CDE.enlacesExternos.promiedos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Promiedos · Estadísticas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-white/70">
              Contacto
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href={CDE.telefonoLink}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  {CDE.telefono}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-white/80">{CDE.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-white/80">{CDE.estadio.direccion}</span>
              </li>
            </ul>

            <p className="mt-4 mb-2 text-sm font-bold uppercase tracking-wider text-white/70">
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
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-white/60 md:flex-row">
            <p>
              © {new Date().getFullYear()} {CDE.name}. Todos los derechos
              reservados.
            </p>
            <p>La Furia Roja · Desde 1956</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
