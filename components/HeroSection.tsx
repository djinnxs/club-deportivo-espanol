import Image from "next/image";
import Link from "next/link";


export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#5C0000]">
      {/* Background Stadium Photo / Pattern Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1920&q=80"
          alt="Estadio Deportivo Español"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000"
        />
        <div className="hero-overlay absolute inset-0"></div>
        <div className="diagonal-stripe absolute inset-0 opacity-20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <div className="mb-6 inline-block">
          <span className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#3A0000] px-6 py-2 rounded-full font-oswald font-bold uppercase tracking-widest text-sm shadow-xl border border-yellow-200">
            <span>⚽</span> Desde 27 de Octubre de 1956
          </span>
        </div>

        <h1 className="font-oswald font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight mb-4 text-white drop-shadow-lg leading-none">
          FURIA <span className="text-[#D4AF37] drop-shadow-[0_4px_25px_rgba(212,175,55,0.4)]">ROJA</span>
        </h1>

        <p className="font-montserrat text-xl sm:text-2xl md:text-3xl font-semibold mb-6 max-w-4xl mx-auto text-gray-100 tracking-wide">
          Club Deportivo Español de Buenos Aires
        </p>

        <p className="font-roboto text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-200 opacity-90 leading-relaxed">
          Más de 68 años de gloria, historia y pertenencia. El orgullo de la colectividad hispano-argentina en el corazón de Mataderos.
        </p>

        <div className="flex flex-wrap gap-5 justify-center items-center">
          <a
            href="#partidos"
            className="btn-primary px-8 py-4 rounded-xl font-oswald text-lg font-bold uppercase tracking-wider text-white border border-[#D4AF37]/50 shadow-2xl flex items-center gap-2"
          >
            <span>⚽</span> Próximos Partidos
          </a>
          <Link
            href="/socios"
            className="btn-gold px-8 py-4 rounded-xl font-oswald text-lg font-bold uppercase tracking-wider shadow-2xl flex items-center gap-2"
          >
            <span>💳</span> Hacete Socio
          </Link>
        </div>
      </div>

      {/* Down arrow scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce-soft">
        <a href="#matchday" className="text-[#D4AF37] text-3xl hover:text-white transition-colors" aria-label="Ir al próximo encuentro">
          ↓
        </a>
      </div>
    </section>
  );
}
