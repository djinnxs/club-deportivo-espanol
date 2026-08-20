"use client";

import { useState } from "react";
import { CDE } from "@/lib/config";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[#C41E3A] font-oswald font-bold uppercase tracking-widest text-sm bg-red-100 px-4 py-1.5 rounded-full">
            Estamos para ayudarte
          </span>
          <h2 className="font-oswald font-extrabold text-5xl sm:text-6xl text-gray-900 mt-3 section-title">
            CONTACTO E INFORMES
          </h2>
          <p className="font-montserrat text-gray-600 max-w-2xl mx-auto mt-4 text-base">
            Envíanos tus consultas institucionales, dudas sobre acreditaciones o atención a socios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details Card */}
          <div className="bg-gradient-to-br from-[#5C0000] via-[#8B0000] to-[#C41E3A] text-white p-8 sm:p-12 rounded-3xl shadow-2xl border-2 border-[#D4AF37]/30 flex flex-col justify-between">
            <div>
              <span className="font-oswald text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-black/30 px-3 py-1 rounded-full border border-[#D4AF37]/30">
                Atención al Socio
              </span>
              <h3 className="font-oswald font-bold text-3xl sm:text-4xl text-white mt-4 mb-6">
                Oficinas Administrativas
              </h3>

              <div className="space-y-6 font-montserrat">
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-[#D4AF37]">📍</span>
                  <div>
                    <h4 className="font-oswald font-bold text-lg text-white">Dirección</h4>
                    <p className="text-sm text-gray-200 mt-0.5">{CDE.estadio.direccion}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl text-[#D4AF37]">📞</span>
                  <div>
                    <h4 className="font-oswald font-bold text-lg text-white">Teléfono de Atención</h4>
                    <a href={CDE.telefonoLink} className="text-sm text-[#D4AF37] hover:underline font-bold">
                      {CDE.telefono}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl text-[#D4AF37]">✉️</span>
                  <div>
                    <h4 className="font-oswald font-bold text-lg text-white">Correo Electrónico</h4>
                    <a href={`mailto:${CDE.email}`} className="text-sm text-gray-200 hover:text-[#D4AF37]">
                      {CDE.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/20">
              <p className="font-oswald text-sm font-bold text-[#D4AF37] uppercase tracking-wider">
                Horarios de atención: Lunes a Viernes de 10:00 a 19:00 hs.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-lg">
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-oswald font-bold text-3xl text-gray-900 mb-2">¡Mensaje Enviado!</h3>
                <p className="font-montserrat text-gray-600 max-w-md mx-auto">
                  Muchas gracias por contactarte con el Club Deportivo Español. Nos comunicaremos a la brevedad.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 btn-primary px-6 py-3 rounded-xl font-oswald text-sm font-bold uppercase text-white"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-oswald text-sm font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre y apellido"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C41E3A] font-montserrat text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-oswald text-sm font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="correo@ejemplo.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C41E3A] font-montserrat text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-oswald text-sm font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="(011) 1234-5678"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C41E3A] font-montserrat text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-oswald text-sm font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Mensaje o Consulta *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Escribe tu mensaje aquí..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C41E3A] font-montserrat text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-xl font-oswald text-base font-bold uppercase tracking-wider text-white shadow-xl"
                >
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
