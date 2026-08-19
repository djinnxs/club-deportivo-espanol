import type { Metadata } from "next";
import { fetchTeamMatches } from "@/lib/matches";
import MatchWidget from "@/components/MatchWidget";

export const metadata: Metadata = {
  title: "Agenda de Partidos",
  description:
    "Próximos partidos, resultados y agenda del Club Deportivo Español en Primera C.",
};

export const dynamic = "force-dynamic";

export default async function AgendaPage() {
  let matches: Awaited<ReturnType<typeof fetchTeamMatches>> = [];
  let error: string | null = null;
  try {
    matches = await fetchTeamMatches();
  } catch (e) {
    error = e instanceof Error ? e.message : "Error al cargar los partidos.";
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-cde-azul">Agenda de Partidos</h1>
      <p className="mt-2 text-zinc-600">
        Próximos compromisos y últimos resultados del Deportivo Español.
      </p>

      {error ? (
        <div className="mt-8 rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center text-sm text-zinc-500">
          No pudimos actualizar la agenda en este momento ({error}). Volvé a
          intentar en unos minutos.
        </div>
      ) : (
        <div className="mt-8">
          <MatchWidget matches={matches} />
        </div>
      )}
    </div>
  );
}