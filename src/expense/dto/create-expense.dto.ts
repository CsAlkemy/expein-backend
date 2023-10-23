import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExpenseDto {
  @ApiProperty({
    description: 'Title of the expense',
    example: 'Groceries',
    required: true,
  })
  @IsString()
  title: string;

  @ApiProperty({
    type: String,
    description: 'Date of the expense or income',
    example: '2023-10-25',
  })
  @IsDateString()
  date: string;

  @ApiProperty({
    type: Number,
    description: 'Amount of the expense or income',
    default: 50,
    required: true,
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    type: String,
    description: 'Category of Expense or Income',
    default: 'Food',
    required: true,
  })
  @IsString()
  category: string;

  @ApiProperty({
    type: String,
    description: 'Description of the expense or income',
    default: 'Weekly groceries',
    required: false,
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({
    type: String,
    description: 'Payment method',
    default: 'Credit Card',
    required: false,
  })
  @IsString()
  @IsOptional()
  paymentMethod: string;

  @ApiProperty({
    type: Boolean,
    description: 'Is this an income?',
    default: false,
  })
  @IsBoolean()
  isIncome: boolean;
}
