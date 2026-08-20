import { CDE } from "@/lib/config";

export default function NewsMarquee() {
  const items = [
    { icon: "🔴", text: "¡Somos la Furia Roja!" },
    { icon: "📞", text: `Contacto: ${CDE.telefono}` },
    { icon: "🏟️", text: "Estadio Nueva España · Mataderos" },
    { icon: "⚽", text: "Seguí todos los partidos en vivo" },
    { icon: "🔴", text: "Desde 1956 · Más de 68 años de historia" },
    { icon: "📱", text: "Seguinos en @clubdeportivoespanol" },
  ];

  const duplicated = [...items, ...items];

  return (
    <div className="cde-gradient overflow-hidden border-y border-white/10">
      <div className="flex whitespace-nowrap py-2">
        <div className="flex animate-marquee items-center gap-8 pr-8">
          {duplicated.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
              <span className="text-white/40">•</span>
            </span>
          ))}
        </div>
        <div className="flex animate-marquee items-center gap-8 pr-8" aria-hidden>
          {duplicated.map((item, i) => (
            <span
              key={`dup-${i}`}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
              <span className="text-white/40">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
