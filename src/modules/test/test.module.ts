import { Module } from '@nestjs/common'
import { PrismaService } from '../../database/prisma.service'
import { TestController } from '../../modules/test/test.controller'
import { PrismaTestRepository } from './repositories/prisma/prisma-test-repository'
import { TestRepository } from './repositories/test-repository'

@Module({
  imports: [],
  controllers: [TestController],
  providers: [
    PrismaService,
    {
      provide: TestRepository,
      useClass: PrismaTestRepository,
    },
  ],
})
export class TestModule {}
