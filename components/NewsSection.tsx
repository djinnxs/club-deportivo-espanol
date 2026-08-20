export default function NewsSection() {
  const news = [
    {
      title: "El plantel profesional se entrena de cara al clásico de la fecha",
      date: "20 Agosto 2026",
      category: "Fútbol",
      categoryBg: "bg-[#C41E3A] text-white",
      summary: "Los dirigidos por el cuerpo técnico intensifican los trabajos tácticos y físicos en el predio para llegar de la mejor forma al fin de semana.",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Continúan las obras de modernización en el Estadio Nueva España",
      date: "18 Agosto 2026",
      category: "Obras",
      categoryBg: "bg-[#D4AF37] text-[#3A0000]",
      summary: "Avanzan las renovaciones de tribunas y pintura institucional en el estadio para dar mayor comodidad a todos los socios e hinchas.",
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Gran convocatoria en la nueva jornada de socios y actividades sociales",
      date: "15 Agosto 2026",
      category: "Institucional",
      categoryBg: "bg-[#8B0000] text-white",
      summary: "Cientos de familias se acercaron a las instalaciones del club para compartir actividades recreativas y renovar sus carnets de socio.",
      image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="noticias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[#C41E3A] font-oswald font-bold uppercase tracking-widest text-sm bg-red-100 px-4 py-1.5 rounded-full">
            Últimas Novedades
          </span>
          <h2 className="font-oswald font-extrabold text-5xl sm:text-6xl text-gray-900 mt-3 section-title">
            NOTICIAS DESTACADAS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <article
              key={i}
              className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-gray-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <span className={`absolute top-4 left-4 ${item.categoryBg} text-xs font-oswald font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow`}>
                    {item.category}
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-xs text-gray-400 font-medium block mb-2">
                    📅 {item.date}
                  </span>
                  <h3 className="font-oswald font-bold text-xl text-gray-900 leading-snug mb-3 hover:text-[#C41E3A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#noticias"
                  className="inline-flex items-center gap-1.5 text-[#C41E3A] font-oswald font-bold text-sm uppercase hover:text-[#8B0000] transition-colors"
                >
                  Leer artículo completo →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
