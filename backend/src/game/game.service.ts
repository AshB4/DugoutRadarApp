import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';
import { CreateGameDto } from './dto/create-game.dto';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepo: Repository<Game>,
  ) {}

  create(game: Partial<Game>) {
    return this.gameRepo.save(game);
  }

  async findAll(): Promise<Game[]> {
    return this.gameRepo.find({ order: { date: 'ASC' } });
  }
  async getFilteredGames(filters: {
    team?: string;
    league?: string;
    date?: string;
  }): Promise<Game[]> {
    const { team, league, date } = filters;
    const query = this.gameRepo.createQueryBuilder('game');

    if (team) {
      query.andWhere(
        '(game.teamHome ILIKE :team OR game.teamAway ILIKE :team)',
        {
          team: `%${team}%`,
        },
      );
    }

    if (league) {
      query.andWhere('game.league ILIKE :league', { league: `%${league}%` });
    }

    if (date) {
      query.andWhere('DATE(game.date) = :date', { date });
    }

    return query.orderBy('game.date', 'ASC').getMany();
  }

  findOne(id: number) {
    return this.gameRepo.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.gameRepo.delete(id);
  }
  async update(id: number, updateData: Partial<Game>) {
    await this.gameRepo.update(id, updateData);
    return this.findOne(id);
  }
}
