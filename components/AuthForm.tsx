"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabaseBrowser";

const supabase = createClient();

export default function AuthForm() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) router.refresh();
    });
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { nombre, apellido },
          },
        });
        if (error) throw error;
        setError(
          "Cuenta creada. Revisá tu email para confirmar y luego ingresá.",
        );
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        router.refresh();
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error inesperado. Intentá de nuevo.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-extrabold text-cde-gris">
          {mode === "login" ? "Ingresá a la zona Socios" : "Creá tu cuenta"}
        </h2>
        <p className="mt-1 text-sm text-zinc-500">
          {mode === "login"
            ? "Accedé con tu email y contraseña."
            : "Registrate para acceder a contenido exclusivo."}
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          {mode === "signup" && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="nombre" className="mb-1 block text-sm font-semibold">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-cde-rojo focus:outline-none focus:ring-2 focus:ring-cde-rojo/20"
                />
              </div>
              <div>
                <label htmlFor="apellido" className="mb-1 block text-sm font-semibold">
                  Apellido
                </label>
                <input
                  id="apellido"
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-cde-rojo focus:outline-none focus:ring-2 focus:ring-cde-rojo/20"
                />
              </div>
            </div>
          )}
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-cde-rojo focus:outline-none focus:ring-2 focus:ring-cde-rojo/20"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-semibold">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-cde-rojo focus:outline-none focus:ring-2 focus:ring-cde-rojo/20"
            />
          </div>

          {error && (
            <p className="rounded-md bg-zinc-100 px-3 py-2 text-sm text-cde-rojo">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="cde-gradient w-full rounded-md px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-cde-rojo-oscuro disabled:opacity-60"
          >
            {loading
              ? "Procesando..."
              : mode === "login"
                ? "Ingresar"
                : "Crear cuenta"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-zinc-500">
          {mode === "login" ? (
            <>
              ¿No tenés cuenta?{" "}
              <button
                onClick={() => setMode("signup")}
                className="font-bold text-cde-rojo hover:underline"
              >
                Registrate
              </button>
            </>
          ) : (
            <>
              ¿Ya tenés cuenta?{" "}
              <button
                onClick={() => setMode("login")}
                className="font-bold text-cde-rojo hover:underline"
              >
                Ingresá
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}