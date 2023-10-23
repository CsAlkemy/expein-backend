import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PayloadResponseDto } from '../common/dto/payload-response.dto';
import { ExpenseService } from './expense.service';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@ApiTags('Expense')
@Controller('api/v1/expense')
export class ExpenseController {
  constructor(private expenseService: ExpenseService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: CreateExpenseDto })
  @ApiResponse({ description: 'Add Expense or Income', status: HttpStatus.OK })
  async create(@Body() createExpenseDto: CreateExpenseDto) {
    const expense = await this.expenseService.create(createExpenseDto);
    return new PayloadResponseDto({
      statusCode: HttpStatus.OK,
      message: expense?.isIncome
        ? 'Income has been successfully created'
        : 'Expense has been successfully created',
      payload: expense,
    });
  }

  @Get()
  async findAll() {
    const res = await this.expenseService.findAll();
    return new PayloadResponseDto({
      statusCode: HttpStatus.OK,
      message: 'Data Fetch successfully',
      payload: res,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const res = await this.expenseService.findOne(id);
    return new PayloadResponseDto({
      statusCode: HttpStatus.OK,
      message: 'Data Fetch successfully',
      payload: res,
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateExpenseDto: UpdateExpenseDto,
  ) {
    const expense = await this.expenseService.update(id, updateExpenseDto);
    console.log(expense);
    return new PayloadResponseDto({
      statusCode: HttpStatus.OK,
      message: 'Updated Successfully',
      payload: expense,
    });
  }

  @Delete(':id')
  async removeExpense(@Param('id') id: string) {
    const res = await this.expenseService.remove(id);
    return new PayloadResponseDto({
      statusCode: HttpStatus.OK,
      message: 'Data Deleted Successfully',
      payload: res,
    });
  }
}
