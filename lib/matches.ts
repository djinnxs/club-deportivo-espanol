export type MatchStatus =
  | "live"
  | "finished"
  | "notstarted"
  | "suspended"
  | "postponed";

export interface MatchTeam {
  name: string;
  shortName: string;
  id: string;
  colors?: string[];
  logo?: string;
}

export interface Match {
  id: string;
  status: MatchStatus;
  startTime: string;
  home: MatchTeam;
  away: MatchTeam;
  homeScore?: number;
  awayScore?: number;
  competition?: string;
  stage?: string;
}

interface RawTeam {
  name?: string;
  short_name?: string;
  id?: string;
  colors?: { color?: string; text_color?: string };
}

interface RawGame {
  id?: string;
  stage_round_name?: string;
  teams?: RawTeam[];
  scores?: number[];
  status?: { enum?: number; name?: string };
  start_time?: string;
}

interface RawRow {
  game?: RawGame;
}

interface RawGamesSection {
  rows?: RawRow[];
}

interface RawData {
  competitor?: RawTeam;
  main_league?: { name?: string };
  games?: {
    next?: RawGamesSection;
    last?: RawGamesSection;
  };
}

interface RawPageProps {
  data?: RawData;
}

interface RawNextData {
  props?: { pageProps?: RawPageProps };
}

const TEAM_SLUG = "deportivo-espanol";
const TEAM_ID = "hbad";

function normalizeStatus(enumVal: number | undefined, name?: string): MatchStatus {
  const n = name?.toLowerCase() ?? "";
  if (enumVal === 2 || n.includes("en vivo") || n.includes("live")) return "live";
  if (enumVal === 3) {
    if (n.includes("abandon") || n.includes("suspend")) return "suspended";
    if (n.includes("posterg") || n.includes("pospuesto")) return "postponed";
    return "finished";
  }
  return "notstarted";
}

function parseStartTime(raw: string | undefined): string {
  const m = raw?.match(/^(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2})$/);
  if (!m) return new Date().toISOString();
  const [, day, month, year, hour, minute] = m;
  return `${year}-${month}-${day}T${hour}:${minute}:00-03:00`;
}

function toMatch(game: RawGame, competition?: string): Match | null {
  if (!game.teams || game.teams.length < 2) return null;
  const [home, away] = game.teams;
  const [homeScore, awayScore] = game.scores ?? [];

  return {
    id: game.id ?? `${TEAM_ID}-${Math.random()}`,
    status: normalizeStatus(game.status?.enum, game.status?.name),
    startTime: parseStartTime(game.start_time),
    home: {
      id: home.id ?? "",
      name: home.name ?? "Local",
      shortName: home.short_name ?? home.name ?? "Local",
    },
    away: {
      id: away.id ?? "",
      name: away.name ?? "Visitante",
      shortName: away.short_name ?? away.name ?? "Visitante",
    },
    homeScore: typeof homeScore === "number" ? homeScore : undefined,
    awayScore: typeof awayScore === "number" ? awayScore : undefined,
    competition,
    stage: game.stage_round_name,
  } satisfies Match;
}

async function fetchPromiedosHtml(): Promise<string> {
  const url = `https://www.promiedos.com.ar/team/${TEAM_SLUG}/${TEAM_ID}`;

  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36",
    },
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`Promiedos error: HTTP ${res.status}`);
  }

  return res.text();
}

export async function fetchTeamMatches(): Promise<Match[]> {
  const html = await fetchPromiedosHtml();

  const script = html.match(
    /<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/,
  );
  if (!script) {
    throw new Error("Promiedos: __NEXT_DATA__ no encontrado");
  }

  const data = JSON.parse(script[1]) as RawNextData;
  const raw = data.props?.pageProps?.data;

  const competition = raw?.main_league?.name;
  const next = raw?.games?.next?.rows ?? [];
  const last = raw?.games?.last?.rows ?? [];

  const matches = [...next, ...last]
    .map((row) => toMatch(row.game ?? {}, competition))
    .filter((m): m is Match => m !== null);

  return matches;
}