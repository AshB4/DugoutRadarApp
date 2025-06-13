import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot() {
    return { message: '⚾ Dugout Radar API is live!' };
  }
}
