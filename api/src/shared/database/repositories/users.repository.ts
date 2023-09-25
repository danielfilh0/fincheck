import { Injectable } from '@nestjs/common'
import { type Prisma } from '@prisma/client'
import { PrismaService } from '../prisma.service'

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findUnique(findUniqueDto: Prisma.UserFindUniqueArgs) {
    return this.prismaService.user.findUnique(findUniqueDto)
  }

  create(createDto: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(createDto)
  }

  update(updateDto: Prisma.UserUpdateArgs) {
    return this.prismaService.user.update(updateDto)
  }
}
