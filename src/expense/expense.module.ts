import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseSchema } from './schema/expense.schema';

@Module({
  controllers: [ExpenseController],
  imports: [
    MongooseModule.forFeature([{ name: 'Expense', schema: ExpenseSchema }]),
  ],
  providers: [ExpenseService],
})
export class ExpenseModule {}
