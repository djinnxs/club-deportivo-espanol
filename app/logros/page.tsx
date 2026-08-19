import type { Metadata } from "next";
import { LOGROS } from "@/lib/historia";
import { Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Logros",
  description:
    "Todos los títulos y logros del Club Deportivo Español desde 1958 hasta la actualidad.",
};

export default function LogrosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-cde-azul">Logros</h1>
      <p className="mt-2 text-zinc-600">
        Los títulos y logros que construyeron la historia del club.
      </p>

      <ul className="mt-8 space-y-4">
        {LOGROS.map((item) => (
          <li
            key={item.titulo}
            className="flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-3 sm:flex-1">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md cde-gradient">
                <Trophy className="h-5 w-5 text-white" />
              </span>
              <p className="font-bold text-cde-gris">{item.titulo}</p>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {item.anios.map((a) => (
                <span
                  key={a}
                  className="rounded-full bg-cde-rojo/10 px-3 py-1 text-xs font-bold text-cde-rojo"
                >
                  {a}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}