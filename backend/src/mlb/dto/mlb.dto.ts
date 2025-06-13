export interface MlbGame {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  date: string;
  time: string;
  stadium?: string;
  league: string;
  eventName: string;
  homeBadge: string;
  awayBadge: string;
}
