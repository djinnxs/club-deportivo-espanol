import { CDE } from "@/lib/config";

export default function MatchesSchedule() {
  const matches = [
    {
      day: "22",
      month: "AGO",
      weekday: "SÁB",
      rival: "DEPORTIVO ESPAÑOL vs RIVADAVIA",
      stadium: "Estadio Nueva España",
      time: "15:30 hs",
      type: "LOCAL",
      typeBg: "bg-[#C41E3A] text-white",
    },
    {
      day: "29",
      month: "AGO",
      weekday: "SÁB",
      rival: "ALMAGRO vs DEPORTIVO ESPAÑOL",
      stadium: "Estadio Tres de Febrero",
      time: "15:30 hs",
      type: "VISITANTE",
      typeBg: "bg-[#5C0000] text-[#D4AF37]",
    },
    {
      day: "05",
      month: "SEP",
      weekday: "SÁB",
      rival: "DEPORTIVO ESPAÑOL vs QUILMES",
      stadium: "Estadio Nueva España",
      time: "15:30 hs",
      type: "LOCAL",
      typeBg: "bg-[#C41E3A] text-white",
    },
  ];

  return (
    <section id="partidos" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-[#C41E3A] font-oswald font-bold uppercase tracking-widest text-sm bg-red-50 px-4 py-1.5 rounded-full">
            Calendario 2026
          </span>
          <h2 className="font-oswald font-extrabold text-5xl sm:text-6xl text-gray-900 mt-3 section-title">
            PRÓXIMOS PARTIDOS
          </h2>
        </div>

        <div className="space-y-5">
          {matches.map((m, i) => (
            <div
              key={i}
              className="card-hover bg-gradient-to-r from-white to-gray-50 border-2 border-gray-200 hover:border-[#C41E3A] rounded-2xl p-6 shadow-md transition-all flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="text-center bg-[#5C0000] text-white px-5 py-3 rounded-xl border border-[#D4AF37]/30 shadow-inner">
                  <div className="text-[10px] font-bold text-[#D4AF37] uppercase">{m.weekday}</div>
                  <div className="font-oswald font-extrabold text-3xl leading-none my-0.5">{m.day}</div>
                  <div className="text-[10px] font-bold text-gray-200 uppercase">{m.month}</div>
                </div>

                <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>

                <div>
                  <h3 className="font-oswald font-bold text-xl text-gray-900 leading-tight">
                    {m.rival}
                  </h3>
                  <p className="text-sm text-gray-500 font-montserrat mt-1 flex items-center gap-1.5">
                    <span>🏟️</span> {m.stadium} · <span>⏰</span> {m.time}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <span className={`${m.typeBg} px-4 py-1.5 rounded-full text-xs font-oswald font-bold uppercase tracking-wider shadow-sm`}>
                  {m.type}
                </span>
                <a
                  href={CDE.enlacesExternos.scores365Partidos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-5 py-2 rounded-xl text-xs font-oswald font-bold uppercase tracking-wider text-white flex items-center gap-1"
                >
                  365Scores ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={CDE.enlacesExternos.scores365Partidos}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-xl font-oswald text-base font-bold uppercase tracking-wider shadow-lg"
          >
            <span>📅</span> Calendario Completo y Posiciones en 365Scores
          </a>
        </div>
      </div>
    </section>
  );
}
