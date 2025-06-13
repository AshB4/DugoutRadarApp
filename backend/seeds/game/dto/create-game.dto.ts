// src/game/dto/create-game.dto.ts
import { IsString, IsDateString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  teamHome: string;

  @IsString()
  teamAway: string;

  @IsDateString()
  date: string;

  @IsString()
  location: string;

  @IsString()
  league: string;
}
