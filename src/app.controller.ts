import { Controller, Get } from '@nestjs/common'
import { TestRepository } from './repositories/test-repository'

@Controller()
export class AppController {
  constructor(private testRepository: TestRepository) {}

  @Get()
  async getHello(): Promise<string> {
    await this.testRepository.create('a')

    return 'foi'
  }
}
