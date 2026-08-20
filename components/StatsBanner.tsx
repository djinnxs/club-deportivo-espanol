export default function StatsBanner() {
  const stats = [
    { number: "68+", label: "Años de Historia", subtext: "Fundado en 1956" },
    { number: "1956", label: "Año de Fundación", subtext: "Mataderos, CABA" },
    { number: "10.000+", label: "Socios Activos", subtext: "Comunidad Furia Roja" },
    { number: "1", label: "Estadio Propio", subtext: "Nueva España" },
  ];

  return (
    <section className="bg-white py-14 border-y border-gray-100 shadow-md">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group p-4 rounded-2xl hover:bg-gray-50 transition-all">
              <div className="stat-number font-oswald font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight drop-shadow-sm">
                {stat.number}
              </div>
              <p className="font-oswald font-bold text-gray-900 uppercase tracking-wide text-base mt-2">
                {stat.label}
              </p>
              <p className="font-montserrat text-xs text-gray-500 font-medium mt-1">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
