import { Injectable } from '@nestjs/common';
import { UpdateLendDto } from './dto/update-lend.dto';
import { Lend } from './schema/lend.schema';
import { CreateLendDto } from './dto/create-lend.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongooes from 'mongoose';

@Injectable()
export class LendService {
  constructor(
    @InjectModel(Lend.name)
    private mongoService: mongooes.Model<Lend>,
  ) {}

  async create(createLendDto: CreateLendDto): Promise<Lend> {
    try {
      return await this.mongoService.create({
        ...createLendDto,
      });
    } catch (error) {
      return error;
    }
  }
  async findAll(): Promise<Lend[]> {
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
  async update(id: string, updateLendDto: UpdateLendDto) {
    try {
      return await this.mongoService.updateOne(
        { _id: id },
        {
          ...updateLendDto,
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
