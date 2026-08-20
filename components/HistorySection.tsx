import { CDE } from "@/lib/config";

export default function HistorySection() {
  const milestones = [
    {
      year: "1956",
      title: "Fundación del Club",
      description: "Un grupo de inmigrantes españoles funda el Club Deportivo Español en Buenos Aires para mantener viva su cultura y pasión deportiva en Argentina.",
      color: "bg-[#C41E3A]",
    },
    {
      year: "1980s",
      title: "Era Dorada en Primera División",
      description: "El club logra el ascenso a la máxima categoría del fútbol argentino, compitiendo de igual a igual contra los grandes del país.",
      color: "bg-[#8B0000]",
    },
    {
      year: "2026",
      title: "68° Aniversario de la Furia Roja",
      description: "Celebración de más de seis décadas de pertenencia comunitaria, actividades deportivas e infraestructura renovada.",
      color: "bg-[#C41E3A]",
    },
  ];

  return (
    <section id="historia" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#C41E3A] font-oswald font-bold uppercase tracking-widest text-sm bg-red-50 px-4 py-1.5 rounded-full">
            Nuestras Raíces
          </span>
          <h2 className="font-oswald font-extrabold text-5xl sm:text-6xl text-gray-900 mt-3 section-title">
            HISTORIA Y IDENTIDAD
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#C41E3A]/20">
            <img
              src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1000&q=80"
              alt="Historia del Club Deportivo Español"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
              <span className="font-oswald text-2xl font-bold text-white drop-shadow">
                Estadio Nueva España · Mataderos, CABA
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-oswald font-bold text-3xl sm:text-4xl text-gray-900 mb-6 leading-tight">
              El Orgullo de la Colectividad Española en Argentina
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              El <strong className="text-[#C41E3A]">Club Deportivo Español de Buenos Aires</strong> fue fundado el <strong>27 de octubre de 1956</strong> por inmigrantes españoles que deseaban un espacio de encuentro, cultura y deporte para las familias ibéricas en el país.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Bautizados como la <strong className="text-[#C41E3A]">"Furia Roja"</strong>, el club construyó una rica trayectoria deportiva, destacándose con su estadio propio en el sur de la Capital Federal y formando atletas en diversas disciplinas.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={CDE.enlacesExternos.wikipedia}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 rounded-xl font-oswald text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2"
              >
                <span>🌐</span> Leer en Wikipedia
              </a>
              <a
                href={CDE.enlacesExternos.ole}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-6 py-3 rounded-xl font-oswald text-sm font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <span>📰</span> Reportaje en Olé
              </a>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="font-oswald font-bold text-3xl text-center text-gray-900 mb-12">
            Hitos Históricos
          </h3>
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-1 before:bg-gray-200">
            {milestones.map((m, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-6 items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-1/2 w-full text-center md:text-left">
                  <div className={`${m.color} text-white p-6 rounded-2xl shadow-xl border-2 border-[#D4AF37]/40`}>
                    <div className="font-oswald font-extrabold text-4xl text-[#D4AF37] mb-2">
                      {m.year}
                    </div>
                    <h4 className="font-oswald font-bold text-xl mb-2">{m.title}</h4>
                    <p className="text-sm text-gray-100 opacity-90 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
                <div className="w-6 h-6 bg-[#D4AF37] rounded-full border-4 border-[#C41E3A] z-10 shadow-lg shrink-0"></div>
                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
