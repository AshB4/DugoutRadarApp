// seeds/game.seeds.ts
import { DataSource } from 'typeorm';
import { Game } from './game/entities/game.entity';

export const gameSeed: Partial<Game>[] = [
  {
    teamHome: 'Sterlington LL',
    teamAway: 'Eastbank LL',
    date: '2025-07-01T17:00:00Z',
    location: 'BF4, St. Julien Park',
    league: 'Louisiana Little League – LL Softball',
  },
  {
    teamHome: 'Jackson Parish LL',
    teamAway: 'Lafayette LL',
    date: '2025-07-03T18:30:00Z',
    location: 'BF4, St. Julien Park',
    league: 'Louisiana Little League – LL Softball',
  },
  {
    teamHome: 'Moss Bluff LL',
    teamAway: 'Avoyelles Am. LL',
    date: '2025-07-05T19:00:00Z',
    location: 'BF4, St. Julien Park',
    league: 'Louisiana Little League – LL Softball',
  },
  {
    teamHome: 'LC Softball LL',
    teamAway: 'Sterlington LL',
    date: '2025-07-07T17:30:00Z',
    location: 'BF4, St. Julien Park',
    league: 'Louisiana Little League – LL Softball',
  },
  {
    teamHome: 'Eastbank LL',
    teamAway: 'Jackson Parish LL',
    date: '2025-07-10T18:00:00Z',
    location: 'BF4, St. Julien Park',
    league: 'Louisiana Little League – LL Softball',
  },
  {
    teamHome: 'Lafayette LL',
    teamAway: 'Moss Bluff LL',
    date: '2025-07-13T19:00:00Z',
    location: 'BF4, St. Julien Park',
    league: 'Louisiana Little League – LL Softball',
  },
  {
    teamHome: 'Avoyelles Am. LL',
    teamAway: 'LC Softball LL',
    date: '2025-07-15T18:45:00Z',
    location: 'BF4, St. Julien Park',
    league: 'Louisiana Little League – LL Softball',
  },
  {
    teamHome: 'Sterlington LL',
    teamAway: 'Jackson Parish LL',
    date: '2025-07-18T17:15:00Z',
    location: 'BF4, St. Julien Park',
    league: 'Louisiana Little League – LL Softball',
  },
  {
    teamHome: 'Eastbank LL',
    teamAway: 'Avoyelles Am. LL',
    date: '2025-07-21T17:00:00Z',
    location: 'BF4, St. Julien Park',
    league: 'Louisiana Little League – LL Softball',
  },
  {
    teamHome: 'Moss Bluff LL',
    teamAway: 'LC Softball LL',
    date: '2025-07-24T18:00:00Z',
    location: 'BF4, St. Julien Park',
    league: 'Louisiana Little League – LL Softball',
  },
];
const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'dugout_radar',
  entities: [Game],
  synchronize: true,
});

dataSource
  .initialize()
  .then(async () => {
    const repo = dataSource.getRepository(Game);
    await repo.clear(); // Optional: wipes old data
    await repo.save(gameSeed);
    console.log('✅ Seed complete!');
    process.exit(0);
  })
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  });
