export const CDE = {
  name: "Club Deportivo Español",
  shortName: "Deportivo Español",
  founded: 1956,
  telefono: "(011) 4619-1515",
  telefonoLink: "tel:+541146191515",
  whatsapp: "5491146191515",
  whatsappLink: "https://wa.me/5491146191515",
  email: "info@clubdeportivoespanol.com.ar",
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
    youtube: "https://www.youtube.com/@FurianEspa%C3%B1olaTV",
  },
  enlacesExternos: {
    promiedos: "https://www.promiedos.com.ar/team/deportivo-espanol/hbad",
    scores365: "https://www.365scores.com/es/football/team/deportivo-espanol-7103",
    scores365Partidos: "https://www.365scores.com/es/football/team/deportivo-espanol-7103/matches",
    scores365Posiciones: "https://www.365scores.com/es/football/team/deportivo-espanol-7103/standings",
    scores365Fichajes: "https://www.365scores.com/es/football/team/deportivo-espanol-7103/transfers",
    wikipedia: "https://es.wikipedia.org/wiki/Club_Deportivo_Espa%C3%B1ol_de_Buenos_Aires",
    ole: "https://www.ole.com.ar/futbol-ascenso/primera-c/deportivoespanol-espanol-ascenso-historia-furia-roja_0_eLAdk3EMUS.html",
  },
  estadio: {
    nombre: "Estadio Nueva España",
    direccion: "Av. Santiago de Compostela 3801, Parque Avellaneda, CABA",
    googleMaps: "https://www.google.com/maps/place/Estadio+Nueva+Espa%C3%B1a/@-34.6578804,-58.4676066,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc961e93c29ff:0x2f8389a9b322a12!8m2!3d-34.6578804!4d-58.4650317!16zL20vMGIwcmcx",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.1!2d-58.4676066!3d-34.6578804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc961e93c29ff%3A0x2f8389a9b322a12!2sEstadio%20Nueva%20Espa%C3%B1a!5e0!3m2!1ses!2sar!4v1700000000",
    coordenadas: { lat: -34.6578804, lng: -58.4650317 },
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
  favicon: "/images/favicon.ico",
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