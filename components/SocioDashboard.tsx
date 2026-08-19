"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabaseBrowser";
import { ASSETS, STORAGE_URL } from "@/lib/config";
import { Download, LogOut } from "lucide-react";

const supabase = createClient();

interface SocioProfile {
  nombre: string;
  apellido: string;
  numero_socio: number;
  tipo_membresia: string;
  estado: string;
  cuota_vencimiento: string | null;
}

interface ExclusivoItem {
  id: string;
  titulo: string;
  contenido: string;
  imagen_url: string | null;
  created_at: string;
}

export default function SocioDashboard() {
  const router = useRouter();
  const [perfil, setPerfil] = useState<SocioProfile | null>(null);
  const [exclusivos, setExclusivos] = useState<ExclusivoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user || !active) {
        if (!user) setLoading(false);
        return;
      }
      const [perfilRes, noticiasRes] = await Promise.all([
        supabase.from("socios").select("*").eq("id", user.id).single(),
        supabase.from("noticias_socios").select("*").order("created_at", { ascending: false }),
      ]);
      if (!active) return;
      if (!perfilRes.error) setPerfil(perfilRes.data as SocioProfile);
      if (!noticiasRes.error) setExclusivos(noticiasRes.data as ExclusivoItem[]);
      setLoading(false);
    });

    return () => {
      active = false;
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 text-center text-zinc-500">
        Cargando zona Socios...
      </div>
    );
  }

  if (!perfil) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 text-center text-zinc-500">
        No pudimos cargar tu perfil. Volvé a ingresar.
      </div>
    );
  }

  const cuotaOk =
    !perfil.cuota_vencimiento || new Date(perfil.cuota_vencimiento) >= new Date();

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-cde-gris">
          Hola, {perfil.nombre} 👋
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-md border border-zinc-300 px-3 py-2 text-sm font-semibold text-zinc-600 transition-colors hover:border-cde-rojo hover:text-cde-rojo"
        >
          <LogOut className="h-4 w-4" /> Salir
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Carnet digital
          </p>
          <div className="mt-2 flex items-center gap-3">
            <Image
              src={ASSETS.logo}
              alt="Escudo CDE"
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
            />
            <div>
              <p className="text-lg font-extrabold text-cde-gris">
                {perfil.nombre} {perfil.apellido}
              </p>
              <p className="text-sm text-zinc-500">
                Socio N° {perfil.numero_socio} · {perfil.tipo_membresia}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Estado de cuenta
          </p>
          <div className="mt-2 flex items-center gap-3">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
                cuotaOk
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-cde-rojo"
              }`}
            >
              {cuotaOk ? "CUOTA AL DÍA" : "CUOTA VENCIDA"}
            </span>
            <span className="text-sm text-zinc-500">
              {perfil.cuota_vencimiento
                ? `Vence: ${new Date(perfil.cuota_vencimiento).toLocaleDateString("es-AR")}`
                : "Sin vencimiento registrado"}
            </span>
          </div>
        </div>
      </div>

      <section>
        <h2 className="mb-3 text-xl font-extrabold text-cde-gris">
          Contenido exclusivo
        </h2>
        {exclusivos.length === 0 ? (
          <p className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center text-sm text-zinc-500">
            Aún no hay contenido exclusivo. Pronto vas a encontrar fotos,
            videos y novedades solo para socios.
          </p>
        ) : (
          <div className="space-y-4">
            {exclusivos.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
              >
                {item.imagen_url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.imagen_url.startsWith("http")
                      ? item.imagen_url
                      : `${STORAGE_URL}/${item.imagen_url}`}
                    alt={item.titulo}
                    className="h-48 w-full object-cover"
                  />
                )}
                <div className="p-5">
                  <h3 className="font-extrabold text-cde-gris">{item.titulo}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{item.contenido}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-xl font-extrabold text-cde-gris">Descargas</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={`${STORAGE_URL}/sitio/videos/media1.mp4`}
            download
            className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-4 transition-shadow hover:shadow-md"
          >
            <Download className="h-5 w-5 text-cde-rojo" />
            <div>
              <p className="text-sm font-bold">Video 1</p>
              <p className="text-xs text-zinc-500">Descargar video exclusivo</p>
            </div>
          </a>
          <a
            href={`${STORAGE_URL}/sitio/videos/media2.mp4`}
            download
            className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-4 transition-shadow hover:shadow-md"
          >
            <Download className="h-5 w-5 text-cde-rojo" />
            <div>
              <p className="text-sm font-bold">Video 2</p>
              <p className="text-xs text-zinc-500">Descargar video exclusivo</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}