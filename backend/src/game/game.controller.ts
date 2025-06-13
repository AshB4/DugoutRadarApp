import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from './entities/game.entity';
import { CreateGameDto } from './dto/create-game.dto';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  create(@Body() game: CreateGameDto) {
    return this.gameService.create(game);
  }

  @Get('filter')
  getFiltered(@Query() query) {
    return this.gameService.getFilteredGames(query);
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Game> {
    return this.gameService.findOne(+id);
  }

  @Get()
  getGames(
    @Query('team') team?: string,
    @Query('league') league?: string,
    @Query('date') date?: string,
  ): Promise<Game[]> {
    // If no query params, return all
    if (!team && !league && !date) {
      return this.gameService.findAll();
    }
    return this.gameService.getFilteredGames({ team, league, date });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Game>) {
    return this.gameService.update(+id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameService.remove(+id);
  }
}
