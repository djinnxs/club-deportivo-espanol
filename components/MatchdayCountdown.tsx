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
    hour: "2-digit",
    minute: "2-digit",
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

  if (!match) {
    return (
      <section className="cde-gradient-azul cde-stripes py-12 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70">
            Próximo partido
          </p>
          <p className="mt-3 text-lg">Sin partidos programados por el momento.</p>
        </div>
      </section>
    );
  }

  const digits: { label: string; value: number }[] = [
    { label: "DÍAS", value: time.days },
    { label: "HS", value: time.hours },
    { label: "MIN", value: time.minutes },
    { label: "SEG", value: time.seconds },
  ];

  return (
    <section className="cde-gradient-azul cde-stripes relative overflow-hidden py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70">
            Próximo encuentro
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
            MATCHDAY
          </h2>
          {match.stage && (
            <p className="mt-2 text-sm text-white/80">{match.stage}</p>
          )}
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
            <div className="flex flex-col items-center gap-3 md:flex-row md:justify-end">
              <div className="text-center md:text-right">
                <p className="text-xs uppercase tracking-wider text-white/60">Local</p>
                <p className="text-xl font-extrabold md:text-2xl">{match.home.name}</p>
              </div>
              <TeamShield src={match.home.logo} alt={match.home.name} size={64} />
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="rounded-xl bg-white/15 px-6 py-3 text-3xl font-black tracking-wider md:text-4xl">
                VS
              </span>
              <div className="grid grid-cols-4 gap-2">
                {digits.map((d) => (
                  <div
                    key={d.label}
                    className="countdown-digit min-w-[52px] rounded-lg px-2 py-2 text-center"
                  >
                    <div className="font-mono text-2xl font-black tabular-nums">
                      {String(d.value).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-white/80">
                      {d.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 md:flex-row md:justify-start">
              <TeamShield src={match.away.logo} alt={match.away.name} size={64} />
              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-wider text-white/60">Visitante</p>
                <p className="text-xl font-extrabold md:text-2xl">{match.away.name}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 border-t border-white/15 pt-6 text-center sm:grid-cols-3">
            <div className="flex items-center justify-center gap-2 text-sm">
              <CalendarDays className="h-4 w-4 text-white/70" />
              <span className="font-semibold capitalize">
                {formatMatchDate(match.startTime)}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-white/70" />
              <span className="font-semibold">
                {new Intl.DateTimeFormat("es-AR", {
                  hour: "2-digit",
                  minute: "2-digit",
                }).format(new Date(match.startTime))}{" "}
                hs
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-white/70" />
              <span className="font-semibold">Estadio Nueva España</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}