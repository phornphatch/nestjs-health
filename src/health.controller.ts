/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller()
export class HealthController {
  constructor() {}

  @Get('/api/health')
  @HttpCode(HttpStatus.OK)
  health(): string {
    return 'OK';
  }
}
