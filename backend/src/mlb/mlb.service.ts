import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs'; // Needed for async Axios in NestJS

@Injectable()
export class MlbService {
  constructor(private readonly http: HttpService) {}

  async getTodayGames() {
    const today = new Date().toISOString().split('T')[0];
    const url = `https://www.thesportsdb.com/api/v1/json/123/eventsday.php?d=${today}&s=Baseball`;

    const response = await firstValueFrom(this.http.get(url));
    return response.data?.events || [];
  }

  async filterGames(team?: string, league?: string, date?: string) {
    const today = date || new Date().toISOString().split('T')[0];
    const url = `https://www.thesportsdb.com/api/v1/json/123/eventsday.php?d=${today}&s=Baseball`;

    const response = await firstValueFrom(this.http.get(url));
    const games = response.data?.events || [];

    return games.filter((game) => {
      const matchTeam = team
        ? game.strHomeTeam?.includes(team) || game.strAwayTeam?.includes(team)
        : true;
      const matchLeague = league ? game.strLeague === league : true;
      const matchDate = date ? game.dateEvent === date : true;
      return matchTeam && matchLeague && matchDate;
    });
  }
}
