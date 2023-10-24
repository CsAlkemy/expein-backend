import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Lend {
  @Prop()
  userId: string;
  @Prop()
  borrowerName: string;
  @Prop()
  lenderName: string;
  @Prop()
  isLend:boolean;
  @Prop()
  dueDate: string;
  @Prop()
  notes: string;
  @Prop()
  amount: number;
}
export const LendSchema = SchemaFactory.createForClass(Lend);
