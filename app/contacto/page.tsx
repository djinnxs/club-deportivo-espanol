import type { Metadata } from "next";
import { CDE } from "@/lib/config";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactate con el Club Deportivo Español: redes sociales, sede e información para asociarte.",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-cde-azul">Contacto</h1>
      <p className="mt-2 text-zinc-600">
        Seguinos en las redes y enterate de todas las novedades del club.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <a
          href={CDE.redes.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
        >
          <InstagramIcon className="h-8 w-8 text-cde-rojo" />
          <div>
            <p className="font-bold text-cde-gris">Instagram</p>
            <p className="text-sm text-zinc-500">@clubdeportivoespanol</p>
          </div>
        </a>
        <a
          href={CDE.redes.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
        >
          <FacebookIcon className="h-8 w-8 text-cde-rojo" />
          <div>
            <p className="font-bold text-cde-gris">Facebook</p>
            <p className="text-sm text-zinc-500">CD Español 1956</p>
          </div>
        </a>
        <a
          href={CDE.redes.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
        >
          <YoutubeIcon className="h-8 w-8 text-cde-rojo" />
          <div>
            <p className="font-bold text-cde-gris">YouTube</p>
            <p className="text-sm text-zinc-500">Furia Española TV</p>
          </div>
        </a>
      </div>

      <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-extrabold text-cde-azul">Hacete socio</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Para asociarte al Club Deportivo Español, escribinos por Instagram o
          Facebook, o acercate a la sede. La cuota social es el sostén de la
          institución: cada aporte se transforma en trabajo, obras y fútbol
          para las divisiones.
        </p>
        <p className="mt-4 rounded-md bg-cde-rojo/10 px-4 py-3 text-sm font-semibold text-cde-rojo">
          🏟️ Estadio Nueva España · Club Deportivo Español, Buenos Aires
        </p>
      </div>
    </div>
  );
}