import { randomUUID } from 'node:crypto'
import { PrismaService } from 'src/database/prisma.service'
import { Injectable } from '@nestjs/common'
import { TestRepository } from '../test-repository'

@Injectable()
export class PrismaTestRepository implements TestRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string): Promise<void> {
    await this.prisma.teste.create({
      data: {
        id: randomUUID(),
        name,
      },
    })
  }
}
