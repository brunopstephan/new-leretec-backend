import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { PrismaService } from './database/prisma.service'
import { PrismaTestRepository } from './repositories/prisma/prisma-test-repository'
import { TestRepository } from './repositories/test-repository'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: TestRepository,
      useClass: PrismaTestRepository,
    },
  ],
})
export class AppModule {}
