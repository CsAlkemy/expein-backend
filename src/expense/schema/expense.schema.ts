import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Expense {
  @Prop()
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
