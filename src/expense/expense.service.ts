import { Injectable } from '@nestjs/common';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './schema/expense.schema';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongooes from 'mongoose';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectModel(Expense.name)
    private mongoService: mongooes.Model<Expense>,
  ) {}

  async create(createExpenseDto: CreateExpenseDto): Promise<Expense> {
    try {
      return await this.mongoService.create({
        ...createExpenseDto,
      });
    } catch (error) {
      return error;
    }
  }
  async findAll(): Promise<Expense[]> {
    try {
      return await this.mongoService.find({});
    } catch (error) {
      throw error;
    }
  }
  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }
  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }
  remove(id: number) {
    return `This action removes a #${id} expense`;
  }
}
