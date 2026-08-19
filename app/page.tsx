import Image from "next/image";
import Link from "next/link";
import { ASSETS, CDE } from "@/lib/config";
import { fetchTeamMatches } from "@/lib/matches";
import MatchWidget from "@/components/MatchWidget";
import { TeamShield } from "@/components/TeamShield";
import { CalendarDays, Trophy, Users, MapPin } from "lucide-react";

export const dynamic = "force-dynamic";

function formatNextMatchDate(iso: string): string {
  return new Intl.DateTimeFormat("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

export default async function Home() {
  let matches: Awaited<ReturnType<typeof fetchTeamMatches>> = [];
  try {
    matches = await fetchTeamMatches();
  } catch (e) {
    console.error("Error cargando partidos:", e);
  }

  const upcoming = matches
    .filter((m) => m.status === "notstarted")
    .sort((a, b) => a.startTime.localeCompare(b.startTime));
  const nextMatch = upcoming[0];
  const lastFinished = matches
    .filter((m) => m.status === "finished")
    .sort((a, b) => b.startTime.localeCompare(a.startTime))[0];

  const stats = [
    { icon: Trophy, label: "Campeonatos", value: "8+" },
    { icon: CalendarDays, label: "Años de historia", value: "70" },
    { icon: Users, label: "Socios", value: "2.000+" },
    { icon: MapPin, label: "Estadio", value: "Nueva España" },
  ];

  return (
    <div>
      <section className="cde-gradient-azul text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 md:flex-row md:py-20">
          <div className="flex-1 text-center md:text-left">
            <p className="mb-2 inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-bold uppercase tracking-widest">
              Furia Roja · Fundado en 1956
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Club Deportivo Español
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-lg text-white/90 md:mx-0">
              Más de seis décadas de pasión, historia y garra en el fútbol
              argentino. Hoy, peleando cada torneo en Primera C.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                href="/historia"
                className="rounded-md cde-gradient px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Nuestra historia
              </Link>
              <Link
                href="/socios"
                className="rounded-md border border-white/40 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Hacete socio
              </Link>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="mx-auto flex aspect-square w-64 items-center justify-center rounded-full bg-white/10 ring-4 ring-white/30 cde-shadow-azul md:w-72">
              <Image
                src={ASSETS.logo}
                alt={`${CDE.name} - escudo`}
                width={240}
                height={240}
                className="mt-1 h-auto w-56 object-contain md:w-64"
                priority
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/15">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xl font-extrabold">{s.value}</p>
                  <p className="text-xs uppercase tracking-wider text-white/70">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {nextMatch ? (
            <div className="mb-6 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-wider text-cde-azul">
                  Próximo partido
                </span>
                <span className="rounded-full bg-cde-rojo/10 px-3 py-1 text-xs font-bold text-cde-rojo">
                  {nextMatch.stage}
                </span>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <div className="flex items-center justify-end gap-2">
                  <p className="text-right text-lg font-extrabold text-cde-gris">
                    {nextMatch.home.name}
                  </p>
                  <TeamShield src={nextMatch.home.logo} alt={nextMatch.home.name} size={40} />
                </div>
                <span className="rounded-lg bg-cde-azul px-4 py-2 text-sm font-black uppercase tracking-wider text-white">
                  VS
                </span>
                <div className="flex items-center justify-start gap-2">
                  <TeamShield src={nextMatch.away.logo} alt={nextMatch.away.name} size={40} />
                  <p className="text-lg font-extrabold text-cde-gris">
                    {nextMatch.away.name}
                  </p>
                </div>
              </div>
              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-zinc-500">
                <CalendarDays className="h-4 w-4" />
                {formatNextMatchDate(nextMatch.startTime)}
              </p>
            </div>
          ) : null}

          <h2 className="mb-4 text-2xl font-extrabold text-cde-gris">
            Partidos
          </h2>
          <MatchWidget matches={matches} />
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-extrabold text-cde-gris">
            Último resultado
          </h2>
          {lastFinished ? (
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-wide text-zinc-500">
                <span>{lastFinished.stage}</span>
                <span>{lastFinished.competition}</span>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                <div className="flex items-center justify-end gap-2">
                  <p className="truncate text-right text-sm font-semibold">
                    {lastFinished.home.name}
                  </p>
                  <TeamShield src={lastFinished.home.logo} alt={lastFinished.home.name} size={28} />
                </div>
                <span className="min-w-14 rounded-md bg-zinc-100 px-2 py-1 text-center font-mono text-base font-bold">
                  {lastFinished.homeScore} - {lastFinished.awayScore}
                </span>
                <div className="flex items-center justify-start gap-2">
                  <TeamShield src={lastFinished.away.logo} alt={lastFinished.away.name} size={28} />
                  <p className="truncate text-sm font-semibold">
                    {lastFinished.away.name}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center text-sm text-zinc-500">
              Sin resultados por el momento.
            </div>
          )}

          <h2 className="mb-4 mt-8 text-2xl font-extrabold text-cde-gris">
            Galería
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              ASSETS.galeria.ig1,
              ASSETS.galeria.socio1,
              ASSETS.galeria.socio2,
              ASSETS.club.valores,
            ].map((src, i) => (
              <Link
                key={src}
                href="/galeria"
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt={`Foto CDE ${i + 1}`}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-cde-azul/0 transition-colors group-hover:bg-cde-azul/20" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}