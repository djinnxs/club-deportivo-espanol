import Image from "next/image";
import Link from "next/link";
import { ASSETS, CDE } from "@/lib/config";
import { fetchTeamMatches } from "@/lib/matches";
import MatchWidget from "@/components/MatchWidget";
import NewsMarquee from "@/components/NewsMarquee";
import HeroSection from "@/components/HeroSection";
import StatsBanner from "@/components/StatsBanner";
import MatchdayCountdown from "@/components/MatchdayCountdown";
import SquadSection from "@/components/SquadSection";
import HistorySection from "@/components/HistorySection";
import NewsSection from "@/components/NewsSection";
import MatchesSchedule from "@/components/MatchesSchedule";
import StadiumSection from "@/components/StadiumSection";
import MembershipPlans from "@/components/MembershipPlans";
import ContactSection from "@/components/ContactSection";
import { TeamShield } from "@/components/TeamShield";
import { CalendarDays } from "lucide-react";

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

  return (
    <div className="bg-gray-50 text-gray-900 font-montserrat">
      {/* Marquesina superior */}
      <NewsMarquee />

      {/* Hero Principal Épico */}
      <HeroSection />

      {/* Banner de Métricas e Historia */}
      <StatsBanner />

      {/* Cuenta Regresiva Furia Roja */}
      <MatchdayCountdown match={nextMatch} />

      {/* Resultados Recientes y Widget de Partidos */}
      <section className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nextMatch ? (
                <div className="flex flex-col justify-between rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md hover:border-[#C41E3A] transition-colors">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-oswald text-xs font-bold uppercase tracking-wider text-[#C41E3A] bg-red-50 px-3 py-1 rounded-full">
                      Próximo Partido
                    </span>
                    <span className="font-oswald text-xs font-bold text-gray-500 uppercase">
                      {nextMatch.stage}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 my-2">
                    <div className="grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3">
                      <div className="flex items-center justify-end gap-2 text-right">
                        <p className="font-oswald text-base font-bold text-gray-900 truncate">
                          {nextMatch.home.name}
                        </p>
                        <TeamShield src={nextMatch.home.logo} alt={nextMatch.home.name} size={38} />
                      </div>
                      <span className="rounded-xl bg-[#5C0000] px-3.5 py-1.5 font-oswald text-sm font-black text-[#D4AF37]">
                        VS
                      </span>
                      <div className="flex items-center justify-start gap-2 text-left">
                        <TeamShield src={nextMatch.away.logo} alt={nextMatch.away.name} size={38} />
                        <p className="font-oswald text-base font-bold text-gray-900 truncate">
                          {nextMatch.away.name}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 font-medium flex items-center gap-1.5 mt-2">
                      <CalendarDays className="h-4 w-4 text-[#C41E3A]" />
                      {formatNextMatchDate(nextMatch.startTime)}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center text-sm text-gray-500">
                  Sin partidos próximos programados en directo.
                </div>
              )}

              {lastFinished ? (
                <div className="flex flex-col justify-between rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md hover:border-[#C41E3A] transition-colors">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-oswald text-xs font-bold uppercase tracking-wider text-[#8B0000] bg-red-50 px-3 py-1 rounded-full">
                      Último Resultado
                    </span>
                    <span className="font-oswald text-xs font-bold text-gray-500 uppercase">
                      {lastFinished.competition}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 my-2">
                    <div className="grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3">
                      <div className="flex items-center justify-end gap-2 text-right">
                        <p className="font-oswald text-base font-bold text-gray-900 truncate">
                          {lastFinished.home.name}
                        </p>
                        <TeamShield src={lastFinished.home.logo} alt={lastFinished.home.name} size={38} />
                      </div>
                      <span className="min-w-[60px] rounded-xl bg-[#C41E3A] px-3 py-1.5 text-center font-oswald text-base font-extrabold text-white">
                        {lastFinished.homeScore} - {lastFinished.awayScore}
                      </span>
                      <div className="flex items-center justify-start gap-2 text-left">
                        <TeamShield src={lastFinished.away.logo} alt={lastFinished.away.name} size={38} />
                        <p className="font-oswald text-base font-bold text-gray-900 truncate">
                          {lastFinished.away.name}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 font-medium flex items-center gap-1.5 mt-2">
                      <CalendarDays className="h-4 w-4 text-[#C41E3A]" />
                      {lastFinished.stage}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center text-sm text-gray-500">
                  Sin resultados finalizados recientemente.
                </div>
              )}
            </div>

            {/* Widget dinámico de API */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xl">
              <h2 className="font-oswald font-bold text-2xl text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-[#C41E3A]">⚽</span> Centro de Partidos y Estadísticas
              </h2>
              <MatchWidget matches={matches} />
            </div>
          </div>

          {/* Lateral Galería */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="font-oswald font-bold text-2xl text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-[#C41E3A]">📸</span> Galería Furia
              </h2>
              <p className="text-xs text-gray-500 font-montserrat mb-6">
                Revive las mejores postales de la hinchada, el estadio y nuestros socios.
              </p>

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
                    className="group relative aspect-square overflow-hidden rounded-2xl shadow border border-gray-200"
                  >
                    <Image
                      src={src}
                      alt={`Foto CDE ${i + 1}`}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5C0000]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 text-white font-oswald text-xs font-bold">
                      Ver foto →
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <Link
                href="/galeria"
                className="btn-primary inline-flex w-full justify-center items-center gap-2 py-3 rounded-xl font-oswald text-sm font-bold uppercase text-white"
              >
                Ver Galería Completa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Plantel Profesional */}
      <SquadSection />

      {/* Sección Historia y Línea de Tiempo */}
      <HistorySection />

      {/* Noticias Destacadas */}
      <NewsSection />

      {/* Calendario de Partidos */}
      <MatchesSchedule />

      {/* Sección Estadio Nueva España */}
      <StadiumSection />

      {/* Planes de Socio */}
      <MembershipPlans />

      {/* Contacto e Informes */}
      <ContactSection />
    </div>
  );
}
