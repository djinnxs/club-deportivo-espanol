import Link from "next/link";
import Image from "next/image";
import { ASSETS, CDE, NAV_LINKS } from "@/lib/config";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="mt-auto text-white border-t border-[#8B0000]">
      {/* Sponsors Bar */}
      <div className="bg-[#5C0000] border-b border-[#8B0000] py-6">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-oswald font-bold text-xs uppercase tracking-widest text-[#D4AF37]">
            Sponsors Oficiales del Club
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {Object.entries(ASSETS.sponsors).map(([key, src]) => (
              <Image
                key={key}
                src={src}
                alt={`Sponsor ${key}`}
                width={120}
                height={40}
                className="h-9 w-auto rounded bg-white p-1.5 object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#3A0000] py-14">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <div className="h-12 w-12 rounded-full bg-white/10 p-1 flex items-center justify-center border border-[#D4AF37]">
                <Image
                  src={ASSETS.logo}
                  alt={`${CDE.name} - escudo`}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <h3 className="font-oswald font-extrabold text-xl text-white">DEPORTIVO ESPAÑOL</h3>
                <p className="font-oswald text-xs font-bold text-[#D4AF37] uppercase tracking-wider">Fundado en 1956</p>
              </div>
            </div>
            <p className="font-montserrat text-sm text-gray-300 leading-relaxed max-w-xs">
              Más de 68 años de gloria, inclusión social y orgullo hispano-argentino en la Ciudad Autónoma de Buenos Aires.
            </p>
          </div>

          <nav aria-label="Navegación Footer">
            <h4 className="font-oswald font-bold text-base text-[#D4AF37] uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 font-montserrat text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="font-oswald font-bold text-base text-[#D4AF37] uppercase tracking-wider mb-4">
              Información Deportiva
            </h4>
            <ul className="space-y-2.5 font-montserrat text-sm">
              <li>
                <a
                  href={CDE.enlacesExternos.scores365}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                >
                  <span>⚽</span> 365Scores · Perfil CDE ↗
                </a>
              </li>
              <li>
                <a
                  href={CDE.enlacesExternos.scores365Partidos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                >
                  <span>📅</span> Calendario de Partidos ↗
                </a>
              </li>
              <li>
                <a
                  href={CDE.enlacesExternos.scores365Posiciones}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                >
                  <span>🏆</span> Tabla de Posiciones ↗
                </a>
              </li>
              <li>
                <a
                  href={CDE.enlacesExternos.promiedos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                >
                  <span>📊</span> Promiedos Estadísticas ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-oswald font-bold text-base text-[#D4AF37] uppercase tracking-wider mb-4">
              Contacto y Redes
            </h4>
            <ul className="space-y-2.5 font-montserrat text-sm text-gray-300 mb-6">
              <li>📍 {CDE.estadio.direccion}</li>
              <li>
                📞{" "}
                <a href={CDE.telefonoLink} className="text-[#D4AF37] hover:underline font-bold">
                  {CDE.telefono}
                </a>
              </li>
              <li>✉️ {CDE.email}</li>
            </ul>

            <div className="flex gap-3">
              <a
                href={CDE.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#C41E3A] transition-colors border border-white/10"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={CDE.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#C41E3A] transition-colors border border-white/10"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={CDE.redes.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#C41E3A] transition-colors border border-white/10"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#260000] py-4 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-montserrat gap-2">
          <p>© {new Date().getFullYear()} Club Deportivo Español. Todos los derechos reservados.</p>
          <p className="font-oswald uppercase tracking-wider text-[#D4AF37] font-bold">
            FURIA ROJA · DESDE 1956
          </p>
        </div>
      </div>
    </footer>
  );
}
