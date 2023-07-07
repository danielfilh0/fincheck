import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { CategoriesRepository } from './repositories/categories.repository';
import { BankAccountsRepository } from './repositories/bank-accounts.repository';
import { TransactionsRepository } from './repositories/transactions.repository';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
  exports: [
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
})
export class DatabaseModule {}
