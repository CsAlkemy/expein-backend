import { IsString, IsNumber, IsBoolean, IsDateString } from 'class-validator';
export class CreateExpenseDto {
  @IsString()
  title: string;
  @IsDateString()
  date: string;
  @IsNumber()
  amount: number;
  @IsString()
  category: string;
  @IsString()
  description: string;
  @IsString()
  paymentMethod: string;
  @IsBoolean()
  isIncome: boolean;
}
