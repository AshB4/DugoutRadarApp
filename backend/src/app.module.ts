import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from '../seeds/game/entities/game.entity';
import { MlbModule } from './mlb/mlb.module';
import { GameModule } from '../seeds/game/game.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'dugout_radar',
      entities: [Game],
      synchronize: true, // ✅ OK in dev
    }),
    GameModule,
    MlbModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
