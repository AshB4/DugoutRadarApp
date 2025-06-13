import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teamHome: string;

  @Column()
  teamAway: string;

  @Column()
  date: string;

  @Column()
  location: string;

  @Column({ default: 'Louisiana Little League' })
  league: string;
}
