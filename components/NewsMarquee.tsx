import { CDE } from "@/lib/config";

export default function NewsMarquee() {
  const items = [
    { icon: "🔴", text: "¡Últimas Noticias del Club!" },
    { icon: "⚽", text: "Próximo partido: Deportivo Español vs Rivadavia - Sábado 22/08 - 15:30hs" },
    { icon: "🏟️", text: "Estadio Nueva España - ¡Vení a alentar a la Furia Roja!" },
    { icon: "📞", text: `Contacto Oficina de Socios: ${CDE.telefono}` },
    { icon: "🏆", text: "Desde 1956 · Más de 68 años de orgullo e historia viva" },
    { icon: "📱", text: "Instagram: @clubdeportivoespanol" },
  ];

  const duplicated = [...items, ...items, ...items];

  return (
    <div className="bg-[#C41E3A] text-white py-2.5 overflow-hidden border-y border-[#8B0000] shadow-inner">
      <div className="flex whitespace-nowrap">
        <div className="flex animate-marquee items-center gap-10">
          {duplicated.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2.5 font-oswald text-sm font-bold uppercase tracking-wider text-white"
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.text}</span>
              <span className="text-[#D4AF37] font-black text-lg mx-2">★</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
