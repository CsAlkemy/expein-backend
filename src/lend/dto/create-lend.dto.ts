import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLendDto {
  @ApiProperty({
    description: 'Borrower Name',
    example: 'John Doe',
    required: true,
  })
  @IsString()
  borrowerName: string;

  @ApiProperty({
    description: 'Lender Name',
    example: 'Alice Smith',
    required: true,
  })
  @IsString()
  lenderName: string;

  @ApiProperty({
    description: 'Is Lend',
    example: true,
    required: true,
  })
  @IsBoolean()
  isLend: boolean;

  @ApiProperty({
    description: 'Amount',
    example: 100.0,
    required: true,
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    description: 'Due Date',
    example: '2023-12-31',
    required: true,
  })
  @IsDateString()
  dueDate: string;

  @ApiProperty({
    description: 'Notes',
    example: 'Loan for a new car.',
    required: true,
  })
  @IsString()
  notes: string;
}
