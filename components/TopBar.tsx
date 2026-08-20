import { CDE } from "@/lib/config";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/SocialIcons";

export default function TopBar() {
  return (
    <div className="bg-cde-gris text-white text-xs">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2">
        <div className="flex items-center gap-4">
          <a
            href={CDE.telefonoLink}
            className="flex items-center gap-1.5 transition-colors hover:text-cde-rojo"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="font-semibold">{CDE.telefono}</span>
          </a>
          <span className="hidden items-center gap-1.5 sm:flex">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>{CDE.email}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden text-white/60 md:inline">Seguinos:</span>
          <a
            href={CDE.redes.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded p-1 transition-colors hover:text-cde-rojo"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href={CDE.redes.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="rounded p-1 transition-colors hover:text-cde-rojo"
          >
            <FacebookIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href={CDE.redes.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="rounded p-1 transition-colors hover:text-cde-rojo"
          >
            <YoutubeIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
