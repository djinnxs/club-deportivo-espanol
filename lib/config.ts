export const CDE = {
  name: "Club Deportivo Español",
  shortName: "Deportivo Español",
  founded: 1956,
  colors: {
    rojo: "#e11d2e",
    rojoOscuro: "#a31524",
    azul: "#123a8f",
    blanco: "#ffffff",
    grisOscuro: "#1f2430",
  },
  redes: {
    instagram: "https://www.instagram.com/clubdeportivoespanol",
    facebook: "https://www.facebook.com/CDEspanol1956",
    youtube: "https://www.youtube.com/@FuriaEspañolaTV",
  },
  supabase: {
    bucketPublico: "sitio",
    bucketSocios: "socios",
  },
} as const;

export const STORAGE_URL =
  "https://upplulzyshwzlwrohekm.supabase.co/storage/v1/object/public";

export const ASSETS = {
  logo: "/images/logo.png",
  sponsors: {
    algodon: `${STORAGE_URL}/sitio/sponsors/algodon.jpg`,
    ennerre: `${STORAGE_URL}/sitio/sponsors/ennerre.jpg`,
    morgade: `${STORAGE_URL}/sitio/sponsors/morgade.jpg`,
  },
  club: {
    valores: `${STORAGE_URL}/sitio/club/valores.jpg`,
  },
  galeria: {
    ig1: `${STORAGE_URL}/sitio/galeria/ig_758706899.jpg`,
    socio1: `${STORAGE_URL}/sitio/galeria/socio1.jpg`,
    socio2: `${STORAGE_URL}/sitio/galeria/socio2.jpg`,
  },
  videos: {
    media1: `${STORAGE_URL}/sitio/videos/media1.mp4`,
    media2: `${STORAGE_URL}/sitio/videos/media2.mp4`,
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/historia", label: "Historia" },
  { href: "/logros", label: "Logros" },
  { href: "/agenda", label: "Agenda" },
  { href: "/galeria", label: "Galería" },
  { href: "/socios", label: "Socios" },
  { href: "/contacto", label: "Contacto" },
] as const;