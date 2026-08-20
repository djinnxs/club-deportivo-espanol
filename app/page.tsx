import Image from "next/image";
import Link from "next/link";
import { ASSETS, CDE } from "@/lib/config";
import { fetchTeamMatches } from "@/lib/matches";
import MatchWidget from "@/components/MatchWidget";
import NewsMarquee from "@/components/NewsMarquee";
import MatchdayCountdown from "@/components/MatchdayCountdown";
import StadiumSection from "@/components/StadiumSection";
import MembershipPlans from "@/components/MembershipPlans";
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
  const nextMatch = upcoming[0] ?? null;

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
      {/* Marquesina pegada al header */}
      <NewsMarquee />

      {/* Hero */}
      <section className="cde-gradient-azul cde-stripes relative overflow-hidden text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="max-w-2xl">
            <p className="mb-2 inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-bold uppercase tracking-widest text-black">
              Furia Roja · Fundado en 1956
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-black md:text-6xl">
              Club Deportivo <br className="hidden md:block" />
              <span className="text-black">Español</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-lg text-black/90 md:mx-0">
              Más de seis décadas de pasión, historia y garra en el fútbol
              argentino. Hoy, peleando cada torneo en Primera C.
            </p>
          </div>

          {/* Estadísticas en negro */}
          <div className="mt-10 border-t border-white/15 pt-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-black/10">
                    <s.icon className="h-5 w-5 text-black" />
                  </span>
                  <div>
                    <p className="text-xl font-extrabold text-black">{s.value}</p>
                    <p className="text-xs uppercase tracking-wider text-black/70">
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cuenta regresiva debajo de las estadísticas */}
      <MatchdayCountdown match={nextMatch} />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            {nextMatch ? (
              <div className="flex flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-wider text-cde-azul">
                    Próximo partido
                  </span>
                  <span className="rounded-full bg-cde-rojo/10 px-3 py-1 text-xs font-bold text-cde-rojo">
                    {nextMatch.stage}
                  </span>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center gap-4">
                  <div className="grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3">
                    <div className="flex min-w-0 items-center justify-end gap-2">
                      <p className="truncate text-right text-lg font-extrabold text-cde-gris">
                        {nextMatch.home.name}
                      </p>
                      <TeamShield src={nextMatch.home.logo} alt={nextMatch.home.name} size={40} />
                    </div>
                    <span className="rounded-lg bg-cde-azul px-4 py-2 text-sm font-black uppercase tracking-wider text-white">
                      VS
                    </span>
                    <div className="flex min-w-0 items-center justify-start gap-2">
                      <TeamShield src={nextMatch.away.logo} alt={nextMatch.away.name} size={40} />
                      <p className="truncate text-lg font-extrabold text-cde-gris">
                        {nextMatch.away.name}
                      </p>
                    </div>
                  </div>
                  <p className="flex items-center justify-center gap-2 text-sm text-zinc-500">
                    <CalendarDays className="h-4 w-4" />
                    {formatNextMatchDate(nextMatch.startTime)}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-5">
                <span className="text-sm font-bold uppercase tracking-wider text-cde-azul">
                  Próximo partido
                </span>
                <div className="flex flex-1 items-center justify-center text-sm text-zinc-500">
                  Sin partidos programados.
                </div>
              </div>
            )}
            {lastFinished ? (
              <div className="flex flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-wider text-cde-azul">
                    Último resultado
                  </span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-600">
                    {lastFinished.competition}
                  </span>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center gap-4">
                  <div className="grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3">
                    <div className="flex min-w-0 items-center justify-end gap-2">
                      <p className="truncate text-right text-lg font-extrabold text-cde-gris">
                        {lastFinished.home.name}
                      </p>
                      <TeamShield src={lastFinished.home.logo} alt={lastFinished.home.name} size={40} />
                    </div>
                    <span className="min-w-14 rounded-lg bg-cde-azul px-3 py-2 text-center font-mono text-lg font-black text-white">
                      {lastFinished.homeScore} - {lastFinished.awayScore}
                    </span>
                    <div className="flex min-w-0 items-center justify-start gap-2">
                      <TeamShield src={lastFinished.away.logo} alt={lastFinished.away.name} size={40} />
                      <p className="truncate text-lg font-extrabold text-cde-gris">
                        {lastFinished.away.name}
                      </p>
                    </div>
                  </div>
                  <p className="flex items-center justify-center gap-2 text-sm text-zinc-500">
                    <CalendarDays className="h-4 w-4" />
                    {lastFinished.stage}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-5">
                <span className="text-sm font-bold uppercase tracking-wider text-cde-azul">
                  Último resultado
                </span>
                <div className="flex flex-1 items-center justify-center text-sm text-zinc-500">
                  Sin resultados por el momento.
                </div>
              </div>
            )}
          </div>
          <h2 className="mb-4 text-2xl font-extrabold text-cde-gris">Partidos</h2>
          <MatchWidget matches={matches} />
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-extrabold text-cde-gris">Galería</h2>
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

      <StadiumSection />

      <MembershipPlans />
    </div>
  );
}
