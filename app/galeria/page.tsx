import type { Metadata } from "next";
import Image from "next/image";
import { ASSETS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Galería de fotos y videos del Club Deportivo Español: historia, socios, valores y momentos de la Furia Roja.",
};

export default function GaleriaPage() {
  const fotos = [
    { src: ASSETS.galeria.ig1, alt: "Foto del club en Instagram" },
    { src: ASSETS.galeria.socio1, alt: "Foto de socios del club" },
    { src: ASSETS.galeria.socio2, alt: "Foto de socios del club" },
    { src: ASSETS.club.valores, alt: "Valores del club" },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-cde-azul">Galería</h1>
      <p className="mt-2 text-zinc-600">
        Imágenes y videos que cuentan la vida del club.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {fotos.map((foto) => (
          <div
            key={foto.src}
            className="group relative aspect-square overflow-hidden rounded-xl"
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-2xl font-extrabold text-cde-azul">Videos</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <video
          src={ASSETS.videos.media1}
          controls
          preload="metadata"
          className="w-full rounded-xl bg-black"
        />
        <video
          src={ASSETS.videos.media2}
          controls
          preload="metadata"
          className="w-full rounded-xl bg-black"
        />
      </div>
    </div>
  );
}