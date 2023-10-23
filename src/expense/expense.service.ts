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
  async findOne(id: string) {
    try {
      return await this.mongoService.findById({ _id: id });
    } catch (error) {
      throw error;
    }
  }
  async update(id: string, updateExpenseDto: UpdateExpenseDto) {
    try {
      return await this.mongoService.updateOne(
        { _id: id },
        {
          ...updateExpenseDto,
        },
      );
    } catch (error) {
      throw error;
    }
  }
  async remove(id: string) {
    try {
      return await this.mongoService.deleteOne({ _id: id });
    } catch (error) {
      throw error;
    }
  }
}
