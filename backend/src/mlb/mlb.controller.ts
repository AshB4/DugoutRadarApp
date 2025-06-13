// src/mlb/mlb.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { MlbService } from './mlb.service';



@Controller('mlb')
export class MlbController {
  constructor(private readonly mlbService: MlbService) {}

  @Get()
  async getLiveGames() {
    return this.mlbService.getTodayGames();
  }

  @Get('filter')
  filterGames(
    @Query('team') team?: string,
    @Query('league') league?: string,
    @Query('date') date?: string,
  ) {
    return this.mlbService.filterGames(team, league, date);
  }
}