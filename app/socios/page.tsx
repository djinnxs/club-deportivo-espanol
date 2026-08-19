import type { Metadata } from "next";
import { createClient } from "@/lib/supabaseServer";
import AuthForm from "@/components/AuthForm";
import SocioDashboard from "@/components/SocioDashboard";

export const metadata: Metadata = {
  title: "Zona Socios",
  description:
    "Accedé a la zona de socios del Club Deportivo Español: carnet digital, estado de cuenta, contenido exclusivo y descargas.",
};

export const dynamic = "force-dynamic";

export default async function SociosPage() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="py-12">
      <div className="mx-auto mb-8 max-w-3xl px-4 text-center">
        <h1 className="text-3xl font-extrabold text-cde-azul">Zona Socios</h1>
        <p className="mt-2 text-zinc-500">
          Carnet digital, estado de cuenta, contenido exclusivo y descargas
          solo para socios del Club.
        </p>
      </div>

      {session ? <SocioDashboard /> : <AuthForm />}
    </div>
  );
}