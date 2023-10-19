import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PayloadResponseDto } from '../common/dto/payload-response.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as mongooes from 'mongoose';
import { Expense } from './schema/expense.schema';

@ApiTags('Expense')
@Controller('api/v1/expense')
export class ExpenseController {
  constructor(
    @InjectModel(Expense.name)
    private expenseModel: mongooes.Model<Expense>,
  ) {}

  @Post()
  @ApiResponse({ description: 'Add Expense or Income', status: HttpStatus.OK })
  @ApiBody({ type: CreateExpenseDto })
  async create(@Body() createExpenseDto: CreateExpenseDto) {
    const slider = await this.expenseModel.create(createExpenseDto);
    return new PayloadResponseDto({
      statusCode: HttpStatus.OK,
      message: 'Expense/Income has been successfully created',
      payload: slider,
    });
  }

  @Get()
  findAll() {
    return this.expenseModel.find();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.expenseModel.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateExpenseDto: UpdateExpenseDto) {
  //   return this.expenseModel.update(+id, updateExpenseDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.expenseModel.remove(+id);
  // }
}
