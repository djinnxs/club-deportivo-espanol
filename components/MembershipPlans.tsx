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
      "Carnet digital de socio oficial CDE",
      "Acceso y descuentos en entradas",
      "Newsletter con primicias de fútbol",
      "Voto y participación en asambleas",
    ],
  },
  {
    nombre: "Socio Preferencial",
    precio: "$10.000",
    periodo: "/mes",
    icon: Crown,
    destacado: true,
    beneficios: [
      "Todo lo del plan Socio Hincha",
      "Prioridad garantizada en compra de entradas",
      "15% de descuento en la tienda oficial",
      "Acceso libre a la platea local",
      "Invitación a eventos e hitos institucionales",
    ],
  },
  {
    nombre: "Socio Vitalicio",
    precio: "$150.000",
    periodo: "pago único",
    icon: Gem,
    beneficios: [
      "Todo lo del plan Preferencial",
      "Carnet físico vitalicio grabado en dorado",
      "Nombre grabado en placa de honor del estadio",
      "Beneficios sociales de por vida sin cuota",
      "Acceso VIP y palco en partidos oficiales",
    ],
  },
];

export default function MembershipPlans() {
  return (
    <section id="socios" className="py-20 bg-gradient-to-br from-[#5C0000] via-[#8B0000] to-[#C41E3A] text-white relative overflow-hidden">
      <div className="diagonal-stripe absolute inset-0 opacity-15"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="mb-16 text-center">
          <span className="text-[#D4AF37] font-oswald font-bold uppercase tracking-widest text-sm bg-black/40 px-5 py-1.5 rounded-full border border-[#D4AF37]/30">
            Formá Parte de la Familia Gallega
          </span>
          <h2 className="font-oswald font-extrabold text-5xl sm:text-6xl text-white tracking-tight mt-3">
            HACETE SOCIO DEL CLUB
          </h2>
          <p className="font-montserrat text-gray-200 max-w-2xl mx-auto mt-4 text-base opacity-90">
            Tu cuota sostiene el crecimiento del club, apoya a las divisiones inferiores e impulsa las obras en el Estadio Nueva España.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {planes.map((plan) => {
            const Icon = plan.icon;
            const isHincha = plan.nombre === "Socio Hincha";
            const cardClasses = plan.destacado
              ? "bg-white text-gray-900 shadow-2xl md:-translate-y-4 border-4 border-[#D4AF37]"
              : isHincha
                ? "bg-gradient-to-br from-[#123a8f] via-[#0d2a6b] to-[#0a1e4a] text-white shadow-2xl border-2 border-[#D4AF37]/60 hover:border-[#D4AF37]"
                : "border-2 border-white/20 bg-black/30 backdrop-blur-md text-white hover:border-[#D4AF37]";

            return (
              <div
                key={plan.nombre}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${cardClasses}`}
              >

                {plan.destacado && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#C41E3A] border-2 border-[#D4AF37] px-5 py-1 text-xs font-oswald font-bold uppercase tracking-wider text-white shadow-lg">
                    ★ MÁS ELEGIDO Y POPULAR
                  </span>
                )}

                <div>
                  <div className="mb-6 flex items-center gap-4">
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${plan.destacado ? "bg-[#C41E3A] text-[#D4AF37]" : "bg-white/15 text-[#D4AF37]"
                        } shadow-md`}
                    >
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="font-oswald font-bold text-2xl tracking-tight">{plan.nombre}</h3>
                  </div>

                  <div className="mb-8 pb-6 border-b border-gray-200/20">
                    <span className="font-oswald text-4xl sm:text-5xl font-extrabold tracking-tight">{plan.precio}</span>
                    <span
                      className={`font-montserrat text-sm font-medium ml-1.5 ${plan.destacado ? "text-gray-500" : "text-gray-300"
                        }`}
                    >
                      {plan.periodo}
                    </span>
                  </div>

                  <ul className="mb-8 space-y-3.5">
                    {plan.beneficios.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm font-montserrat leading-snug">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 font-bold ${plan.destacado ? "text-[#C41E3A]" : "text-[#D4AF37]"
                            }`}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/socios"
                  className={`block w-full py-4 text-center rounded-xl font-oswald text-base font-bold uppercase tracking-wider transition-all ${plan.destacado
                      ? "btn-primary text-white shadow-xl"
                      : isHincha
                        ? "bg-[#D4AF37] text-[#0a1e4a] hover:bg-yellow-400 font-extrabold shadow-xl border border-yellow-200"
                        : "btn-primary border border-[#D4AF37]/40 text-white"
                    }`}
                >
                  Asociarme Ahora
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}