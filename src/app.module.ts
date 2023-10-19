import { Module } from '@nestjs/common';
import { ExpenseModule } from './expense/expense.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { LendModule } from './lend/lend.module';
import * as process from 'process';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ExpenseModule,
    UsersModule,
    LendModule,
    MongooseModule.forRoot(process.env.DB_URI),
  ],
})
export class AppModule {}
