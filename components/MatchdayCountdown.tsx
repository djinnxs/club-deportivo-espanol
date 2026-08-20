"use client";

import { useEffect, useState } from "react";
import type { Match } from "@/lib/matches";
import { TeamShield } from "@/components/TeamShield";
import { CalendarDays, Clock, MapPin } from "lucide-react";

interface Props {
  match: Match | null;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(target: string): TimeLeft {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function formatMatchDate(iso: string): string {
  return new Intl.DateTimeFormat("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date(iso));
}

export default function MatchdayCountdown({ match }: Props) {
  const [time, setTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!match) return;
    setTime(calcTimeLeft(match.startTime));
    const id = setInterval(() => setTime(calcTimeLeft(match.startTime)), 1000);
    return () => clearInterval(id);
  }, [match]);

  const fallbackMatch = {
    home: { name: "Deportivo Español", logo: "/images/logo.png" },
    away: { name: "Rivadavia", logo: "" },
    startTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    stage: "Primera C · Torneo Oficial",
  };

  const activeMatch = match ?? fallbackMatch;

  const digits: { label: string; value: number }[] = [
    { label: "DÍAS", value: time.days },
    { label: "HS", value: time.hours },
    { label: "MIN", value: time.minutes },
    { label: "SEG", value: time.seconds },
  ];

  return (
    <section id="matchday" className="relative py-20 bg-gradient-to-br from-[#5C0000] via-[#8B0000] to-[#C41E3A] text-white overflow-hidden shadow-2xl">
      <div className="diagonal-stripe absolute inset-0 opacity-20"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-10">
          <span className="text-[#D4AF37] font-oswald font-bold uppercase tracking-widest text-sm bg-black/30 px-5 py-1.5 rounded-full border border-[#D4AF37]/30">
            Próximo Encuentro
          </span>
          <h2 className="font-oswald font-extrabold text-5xl sm:text-6xl text-white tracking-tight mt-3">
            MATCHDAY
          </h2>
          {activeMatch.stage && (
            <p className="mt-1 text-sm font-medium text-gray-200 uppercase tracking-wider">
              {activeMatch.stage}
            </p>
          )}
        </div>

        <div className="rounded-3xl border border-[#D4AF37]/30 bg-black/40 p-6 md:p-12 backdrop-blur-md shadow-2xl">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
            {/* Local Team */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-end text-center sm:text-right">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Local</p>
                <p className="font-oswald text-2xl sm:text-3xl font-extrabold text-white">{activeMatch.home.name}</p>
              </div>
              <div className="h-20 w-20 bg-white/10 rounded-full flex items-center justify-center border-2 border-[#D4AF37] shadow-lg">
                <TeamShield src={activeMatch.home.logo} alt={activeMatch.home.name} size={56} />
              </div>
            </div>

            {/* VS & Countdown */}
            <div className="flex flex-col items-center gap-5">
              <span className="font-oswald text-5xl font-black text-[#D4AF37] tracking-wider drop-shadow-[0_2px_15px_rgba(212,175,55,0.6)]">
                VS
              </span>
              <div className="grid grid-cols-4 gap-2.5">
                {digits.map((d) => (
                  <div
                    key={d.label}
                    className="min-w-[64px] rounded-xl bg-gradient-to-b from-[#C41E3A] to-[#8B0000] p-3 text-center border border-[#D4AF37]/40 shadow-lg"
                  >
                    <div className="font-oswald text-2xl sm:text-3xl font-black tabular-nums text-white">
                      {String(d.value).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                      {d.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Away Team */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start text-center sm:text-left">
              <div className="h-20 w-20 bg-white/10 rounded-full flex items-center justify-center border-2 border-[#D4AF37] shadow-lg">
                <TeamShield src={activeMatch.away.logo} alt={activeMatch.away.name} size={56} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Visitante</p>
                <p className="font-oswald text-2xl sm:text-3xl font-extrabold text-white">{activeMatch.away.name}</p>
              </div>
            </div>
          </div>

          {/* Footer Match Info */}
          <div className="mt-10 grid gap-4 border-t border-white/15 pt-6 text-center sm:grid-cols-3 font-montserrat">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-200">
              <CalendarDays className="h-5 w-5 text-[#D4AF37]" />
              <span className="font-semibold capitalize">
                {formatMatchDate(activeMatch.startTime)}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-200">
              <Clock className="h-5 w-5 text-[#D4AF37]" />
              <span className="font-semibold">
                {new Intl.DateTimeFormat("es-AR", {
                  hour: "2-digit",
                  minute: "2-digit",
                }).format(new Date(activeMatch.startTime))}{" "}
                hs
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-200">
              <MapPin className="h-5 w-5 text-[#D4AF37]" />
              <span className="font-semibold">Estadio Nueva España</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}