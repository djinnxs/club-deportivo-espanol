import { CDE } from "@/lib/config";

export default function SquadSection() {
  const players = [
    {
      number: "10",
      name: "Capitán del Equipo",
      position: "Mediocampista",
      image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "9",
      name: "Goleador Furia",
      position: "Delantero Centro",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "1",
      name: "Guardameta Titular",
      position: "Arquero",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "4",
      name: "Defensa Central",
      position: "Defensor",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="plantel" className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#C41E3A] font-oswald font-bold uppercase tracking-widest text-sm bg-red-100 px-4 py-1.5 rounded-full">
            Temporada 2026
          </span>
          <h2 className="font-oswald font-extrabold text-5xl sm:text-6xl text-gray-900 mt-3 section-title">
            NUESTRO PLANTEL
          </h2>
          <p className="font-montserrat text-gray-600 max-w-2xl mx-auto mt-4 text-base">
            Conoce a los guerreros que defienden la camiseta roja y dorada en cada partido de la temporada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {players.map((p, i) => (
            <div
              key={i}
              className="card-hover group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 flex flex-col justify-between"
            >
              <div className="relative h-80 bg-gradient-to-b from-[#C41E3A] to-[#5C0000] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#3A0000] w-12 h-12 rounded-full flex items-center justify-center font-oswald font-extrabold text-2xl shadow-xl border-2 border-white z-10">
                  {p.number}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#5C0000] via-transparent to-transparent opacity-80"></div>
              </div>

              <div className="p-5 bg-white border-t border-gray-100">
                <h3 className="font-oswald font-bold text-xl text-gray-900 group-hover:text-[#C41E3A] transition-colors">
                  {p.name}
                </h3>
                <p className="text-[#C41E3A] font-oswald font-bold text-xs uppercase tracking-wider mt-1">
                  {p.position}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={CDE.enlacesExternos.scores365Fichajes}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-oswald text-base font-bold uppercase tracking-wider text-white"
          >
            <span>👥</span> Ver Plantel Completo en 365Scores
          </a>
        </div>
      </div>
    </section>
  );
}
