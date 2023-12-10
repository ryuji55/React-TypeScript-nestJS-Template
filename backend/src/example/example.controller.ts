// example.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('example')
@Controller('example')
export class ExampleController {
  @Get()
  getExample() {
    return { message: 'This is an example response' };
  }
}
