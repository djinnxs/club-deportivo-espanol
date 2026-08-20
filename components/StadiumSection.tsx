import { CDE } from "@/lib/config";
import { MapPin, Users, Calendar, ExternalLink } from "lucide-react";

export default function StadiumSection() {
  const estadio = CDE.estadio;

  const features = [
    {
      icon: MapPin,
      title: "Ubicación",
      desc: estadio.direccion,
    },
    {
      icon: Users,
      title: "Capacidad",
      desc: "Más de 10.000 espectadores",
    },
    {
      icon: Calendar,
      title: "Inauguración",
      desc: "Década de 1960 · Remodelado en 2007",
    },
  ];

  return (
    <section id="estadio" className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-cde-rojo">
            Nuestra casa
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-cde-azul md:text-5xl">
            {estadio.nombre}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            El templo de la Furia Roja. Ubicado en el corazón de Mataderos,
            es donde el Club Deportivo Español hace valer su localía.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <iframe
              src={estadio.googleMapsEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ${estadio.nombre}`}
              className="w-full"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-extrabold text-cde-gris">
              El hogar de la Furia Roja
            </h3>
            <p className="mt-3 leading-relaxed text-zinc-600">
              El <strong className="text-cde-rojo">{estadio.nombre}</strong> es
              mucho más que un estadio: es el punto de encuentro de generaciones de
              hinchas que llevan los colores del club en el corazón.
            </p>

            <div className="mt-6 space-y-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full cde-gradient">
                    <f.icon className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <p className="font-bold text-cde-gris">{f.title}</p>
                    <p className="text-sm text-zinc-600">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={estadio.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-md cde-gradient px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              <MapPin className="h-4 w-4" />
              Ver en Google Maps
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}