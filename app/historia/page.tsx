import type { Metadata } from "next";
import { HITOS } from "@/lib/historia";

export const metadata: Metadata = {
  title: "Historia",
  description:
    "La historia del Club Deportivo Español: desde su fundación en 1956 hasta hoy, con todos sus ascensos, títulos y momentos históricos.",
};

export default function HistoriaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-cde-azul">
        Nuestra Historia
      </h1>
      <p className="mt-2 max-w-2xl text-zinc-600">
        Del 12 de octubre de 1956 a hoy. Más de seis décadas de pasión, garra
        y la Furia Roja en el fútbol argentino.
      </p>

      <ol className="relative mt-10 space-y-8 border-l-2 border-cde-rojo pl-6">
        {HITOS.map((hito) => (
          <li key={hito.anio} className="relative">
            <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center">
              <span className="h-3 w-3 rounded-full bg-cde-rojo ring-4 ring-cde-rojo/20" />
            </span>
            <p className="text-sm font-extrabold uppercase tracking-wider text-cde-rojo">
              {hito.anio}
            </p>
            <h2 className="mt-0.5 text-lg font-bold text-cde-gris">
              {hito.titulo}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600">
              {hito.descripcion}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}