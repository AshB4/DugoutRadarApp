// src/mlb/mlb.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MlbService } from './mlb.service';
import { MlbController } from './mlb.controller';

@Module({
  imports: [HttpModule],
  controllers: [MlbController],
  providers: [MlbService],
})
export class MlbModule {}
