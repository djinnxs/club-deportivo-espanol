import type { Match } from "@/lib/matches";
import { CalendarDays } from "lucide-react";
import { TeamShield } from "@/components/TeamShield";

const STATUS_LABELS: Record<Match["status"], string> = {
  live: "EN VIVO",
  finished: "FINALIZADO",
  notstarted: "PRÓXIMO",
  suspended: "SUSPENDIDO",
  postponed: "POSTERGADO",
};

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("es-AR", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

function MatchCard({ match }: { match: Match }) {
  const isLive = match.status === "live";
  const hasScore =
    typeof match.homeScore === "number" && typeof match.awayScore === "number";

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4 transition-shadow hover:shadow-md">
      <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-wide">
        <span
          className={
            isLive
              ? "flex items-center gap-1.5 text-cde-rojo"
              : "text-zinc-500"
          }
        >
          {isLive && (
            <span className="h-2 w-2 animate-pulse rounded-full bg-cde-rojo" />
          )}
          {STATUS_LABELS[match.status]}
        </span>
        {match.stage && (
          <span className="text-zinc-500">{match.stage}</span>
        )}
        {match.competition && (
          <span className="text-zinc-400">{match.competition}</span>
        )}
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="flex items-center justify-end gap-2">
          <p className="truncate text-right text-sm font-semibold">
            {match.home.name}
          </p>
          <TeamShield src={match.home.logo} alt={match.home.name} />
        </div>
        <span className="min-w-14 rounded-md bg-zinc-100 px-2 py-1 text-center font-mono text-base font-bold">
          {hasScore
            ? `${match.homeScore} - ${match.awayScore}`
            : "VS"}
        </span>
        <div className="flex items-center justify-start gap-2">
          <TeamShield src={match.away.logo} alt={match.away.name} />
          <p className="truncate text-sm font-semibold">{match.away.name}</p>
        </div>
      </div>
      <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-zinc-500">
        <CalendarDays className="h-3.5 w-3.5" />
        {formatDate(match.startTime)}
      </p>
    </div>
  );
}

export default function MatchWidget({
  matches,
}: {
  matches: Match[];
}) {
  if (matches.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center text-sm text-zinc-500">
        No hay partidos programados por el momento.
      </div>
    );
  }

  const live = matches.filter((m) => m.status === "live");
  const next = matches
    .filter((m) => m.status === "notstarted")
    .sort((a, b) => a.startTime.localeCompare(b.startTime))
    .slice(0, 2);
  const last = matches
    .filter((m) => m.status === "finished")
    .sort((a, b) => b.startTime.localeCompare(a.startTime))
    .slice(0, 1);

  return (
    <div className="space-y-3">
      {live.map((m) => (
        <MatchCard key={m.id} match={m} />
      ))}
      {next.map((m) => (
        <MatchCard key={m.id} match={m} />
      ))}
      {last.map((m) => (
        <MatchCard key={m.id} match={m} />
      ))}
    </div>
  );
}