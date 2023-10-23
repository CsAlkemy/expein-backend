import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({
  timestamps: true,
})
export class Expense {
  @Prop()
  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  date: string;
  @Prop()
  amount: number;
  @Prop()
  category: string;
  @Prop()
  description: string;
  @Prop()
  paymentMethod: string;
  @Prop()
  isIncome: boolean;
}
export const ExpenseSchema = SchemaFactory.createForClass(Expense);
