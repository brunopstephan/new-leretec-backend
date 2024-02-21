import { Body, Controller, Post } from '@nestjs/common'
import { TestBody } from './dtos/test-dto'
import { TestRepository } from './repositories/test-repository'

@Controller('/test')
export class TestController {
  constructor(private testRepository: TestRepository) {}

  @Post()
  async getHello(@Body() { name }: TestBody): Promise<string> {
    await this.testRepository.create(name)

    return 'foi'
  }
}
