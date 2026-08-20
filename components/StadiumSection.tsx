import { CDE } from "@/lib/config";
import { MapPin, Users, Calendar, ExternalLink } from "lucide-react";

export default function StadiumSection() {
  const estadio = CDE.estadio;

  const features = [
    {
      icon: MapPin,
      title: "Ubicación Principal",
      desc: "Av. Santiago de Compostela 3801, Parque Avellaneda, CABA",
    },
    {
      icon: Users,
      title: "Capacidad de Espectadores",
      desc: "Más de 32.500 espectadores",
    },
    {
      icon: Calendar,
      title: "Inauguración e Historia",
      desc: "Inaugurado el 11 de Febrero de 1981 · Propiedad de CDE",
    },
  ];

  return (
    <section id="estadio" className="bg-gray-100 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#C41E3A] font-oswald font-bold uppercase tracking-widest text-sm bg-red-100 px-4 py-1.5 rounded-full">
            Nuestra Casa
          </span>
          <h2 className="font-oswald font-extrabold text-5xl sm:text-6xl text-gray-900 mt-3 section-title">
            ESTADIO NUEVA ESPAÑA
          </h2>
          <p className="font-montserrat text-gray-600 max-w-2xl mx-auto mt-4 text-base">
            El templo del pueblo gallego en Buenos Aires. Donde cada fin de semana late la Furia Roja.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden border-4 border-[#C41E3A]/20 shadow-2xl bg-white h-[450px]">
            <iframe
              src={estadio.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ${estadio.nombre}`}
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col justify-center bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-200">
            <h3 className="font-oswald font-bold text-3xl text-gray-900 mb-3">
              El Baluarte de Mataderos
            </h3>
            <p className="font-montserrat text-gray-700 leading-relaxed mb-8">
              El <strong className="text-[#C41E3A]">{estadio.nombre}</strong> es mucho más que un campo de juego: representa el esfuerzo de socios e inmigrantes que levantaron este gigante deportivo en el sur porteño.
            </p>

            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C41E3A] to-[#8B0000] text-[#D4AF37] shadow-md border border-[#D4AF37]/30">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="font-oswald font-bold text-lg text-gray-900">{f.title}</h4>
                    <p className="font-montserrat text-sm text-gray-600 mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={estadio.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-oswald text-base font-bold uppercase tracking-wider text-white shadow-xl w-full sm:w-auto"
              >
                <span>📍</span> Abrir Ubicación en Google Maps
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}