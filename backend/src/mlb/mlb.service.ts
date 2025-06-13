import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs'; // Needed for async Axios in NestJS
import { MlbGame } from './dto/mlb.dto'; 

@Injectable()
export class MlbService {
  constructor(private readonly http: HttpService) {}

  private normalize(str?: string): string {
    return str?.toLowerCase().trim() ?? '';
  }
  
  async getTodayGames(): Promise<MlbGame[]> {
    const today = new Date().toISOString().split('T')[0];
    const url = `https://www.thesportsdb.com/api/v1/json/123/eventsday.php?d=${today}&s=Baseball`;
  
    try {
      const response = await firstValueFrom(this.http.get(url));
      const games = response.data?.events || [];
  
      return games.map(event => ({
        id: event.idEvent,
        homeTeam: event.strHomeTeam,
        awayTeam: event.strAwayTeam,
        homeScore: event.intHomeScore ? parseInt(event.intHomeScore) : null,
        awayScore: event.intAwayScore ? parseInt(event.intAwayScore) : null,
        date: event.dateEvent,
        time: event.strTime,
        stadium: event.strFilename, // optional fallback
        league: event.strLeague,
        eventName: event.strEvent,
        homeBadge: event.strHomeTeamBadge,
        awayBadge: event.strAwayTeamBadge,
      }));
    } catch (error) {
      console.error('Failed to fetch games:', error.message);
      return [];
    }
  }
  
}

