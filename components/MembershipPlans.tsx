import Link from "next/link";
import { Check, Star, Crown, Gem } from "lucide-react";

interface Plan {
  nombre: string;
  precio: string;
  periodo: string;
  icon: typeof Star;
  destacado?: boolean;
  beneficios: string[];
}

const planes: Plan[] = [
  {
    nombre: "Socio Hincha",
    precio: "$5.000",
    periodo: "/mes",
    icon: Star,
    beneficios: [
      "Carnet de socio oficial",
      "Descuentos en entradas",
      "Newsletter institucional",
      "Participación en asambleas",
    ],
  },
  {
    nombre: "Socio Preferencial",
    precio: "$10.000",
    periodo: "/mes",
    icon: Crown,
    destacado: true,
    beneficios: [
      "Todo lo del plan Hincha",
      "Prioridad en compra de entradas",
      "10% off en tienda oficial",
      "Acceso a eventos exclusivos",
      "Invitación a partidos históricos",
    ],
  },
  {
    nombre: "Socio Vitalicio",
    precio: "$150.000",
    periodo: "pago único",
    icon: Gem,
    beneficios: [
      "Todo lo del plan Preferencial",
      "Carnet vitalicio dorado",
      "Nombre en placa del estadio",
      "Beneficios de por vida",
      "Acceso VIP a eventos del club",
    ],
  },
];

export default function MembershipPlans() {
  return (
    <section id="planes" className="cde-gradient-azul cde-stripes py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70">
            Sumate a la Furia
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
            Hacete Socio
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Elegí el plan que mejor se adapte a vos. Tu aporte sostiene al club
            y nos permite seguir creciendo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {planes.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.nombre}
                className={`relative flex flex-col rounded-2xl p-8 transition-transform ${
                  plan.destacado
                    ? "bg-white text-cde-gris shadow-2xl md:-translate-y-4"
                    : "border border-white/20 bg-white/10 backdrop-blur-sm text-white"
                }`}
              >
                {plan.destacado && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cde-rojo px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Más elegido
                  </span>
                )}

                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${
                      plan.destacado ? "cde-gradient" : "bg-white/15"
                    }`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </span>
                  <h3 className="text-xl font-extrabold">{plan.nombre}</h3>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-black">{plan.precio}</span>
                  <span
                    className={`text-sm ${
                      plan.destacado ? "text-zinc-500" : "text-white/70"
                    }`}
                  >
                    {plan.periodo}
                  </span>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.beneficios.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.destacado ? "text-cde-rojo" : "text-white"
                        }`}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/socios"
                  className={`block rounded-md py-3 text-center text-sm font-bold transition-opacity hover:opacity-90 ${
                    plan.destacado
                      ? "cde-gradient text-white"
                      : "bg-white text-cde-rojo"
                  }`}
                >
                  Elegir plan
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}