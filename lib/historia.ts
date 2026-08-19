export interface Hito {
  anio: string;
  titulo: string;
  descripcion: string;
}

export const HITOS: Hito[] = [
  {
    anio: "1956",
    titulo: "Fundación",
    descripcion:
      "El Club Deportivo Español nace el 12 de octubre de 1956 en el barrio porteño de Caballito, de la mano de la colectividad española, adoptando la camiseta roja y los colores de la bandera de España.",
  },
  {
    anio: "1958",
    titulo: "Primer título",
    descripcion:
      "Apenas dos años después de su fundación, Español se consagra campeón de la Cuarta División (Tercera de Ascenso) y comienza su camino ascendente.",
  },
  {
    anio: "1960",
    titulo: "Campeón de Tercera",
    descripcion:
      "Obtiene el título de la Tercera División, consolidando al club como una de las instituciones en pleno crecimiento del ascenso argentino.",
  },
  {
    anio: "1967",
    titulo: "Ascenso a Primera División",
    descripcion:
      "Tras el campeonato logrado en 1966 y el reducido, Español consigue el histórico ascenso a la máxima categoría del fútbol argentino por primera vez.",
  },
  {
    anio: "1979",
    titulo: "Campeón de Primera C",
    descripcion:
      "Gana el título de la Tercera División (Primera C), reafirmando su identidad de club grande del ascenso argentino.",
  },
  {
    anio: "1984",
    titulo: "Campeón de Primera B",
    descripcion:
      "Se consagra campeón de la Segunda División (Primera B) y obtiene el ascenso directo a Primera A, iniciando la era dorada del club.",
  },
  {
    anio: "1985",
    titulo: "Debut en el Nacional 85",
    descripcion:
      "Español comienza su participación sostenida en la máxima categoría, con un plantel que se ganó el cariño del público por su garra y estilo.",
  },
  {
    anio: "1986-1992",
    titulo: "Terceros en Primera",
    descripcion:
      "Logra sus mejores campañas en la máxima categoría: terceros en la 1985-86, en la 1988-89 y en el Clausura 1992, peleando torneo a torneo.",
  },
  {
    anio: "1998",
    titulo: "Crisis económica",
    descripcion:
      "El club atraviesa una profunda crisis financiera que deriva en concurso preventivo de acreedores, poniendo en riesgo su continuidad.",
  },
  {
    anio: "2001-2002",
    titulo: "Campeón y renacimiento",
    descripcion:
      "En plena recuperación, Español se corona campeón de la Primera B y logra el ascenso, iniciando la reconstrucción institucional.",
  },
  {
    anio: "2007",
    titulo: "Nueva España",
    descripcion:
      "El estadio del club pasa a llamarse 'Nueva España', tras una gestión que recuperó la sede y el predio para la institución.",
  },
  {
    anio: "2014",
    titulo: "Ascenso a Primera B",
    descripcion:
      "Consigue el ascenso a Primera B por el reducido, confirmando la solidez deportiva del club en su centenario cercano.",
  },
];

export const LOGROS: { titulo: string; anios: string[] }[] = [
  {
    titulo: "Campeón de Cuarta División (Tercera de Ascenso)",
    anios: ["1958"],
  },
  {
    titulo: "Campeón de Tercera División",
    anios: ["1960", "1979"],
  },
  {
    titulo: "Campeón de Segunda División (Primera B) · ascenso a Primera",
    anios: ["1984", "2001/02"],
  },
  {
    titulo: "Subcampeón",
    anios: ["1977"],
  },
  {
    titulo: "Tercer puesto en Primera División",
    anios: ["1985-86", "1988-89", "Clausura 1992"],
  },
  {
    titulo: "Ascenso a Primera División por reducido",
    anios: ["1966"],
  },
  {
    titulo: "Ascenso a Primera B por reducido",
    anios: ["2014"],
  },
  {
    titulo: "Copa Dos Penínsulas",
    anios: ["1962", "1964", "1966", "1979", "1980", "1981", "1986", "1998", "2008", "2014"],
  },
  {
    titulo: "Copa Ríos Seoane",
    anios: ["1981"],
  },
  {
    titulo: "Copa Hermandad",
    anios: ["2008"],
  },
  {
    titulo: "Copa UPM",
    anios: ["2013"],
  },
];