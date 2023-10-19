import { Injectable } from '@nestjs/common';
import { CreateLendDto } from './dto/create-lend.dto';
import { UpdateLendDto } from './dto/update-lend.dto';

@Injectable()
export class LendService {
  create(createLendDto: CreateLendDto) {
    return 'This action adds a new lend';
  }

  findAll() {
    return `This action returns all lend`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lend`;
  }

  update(id: number, updateLendDto: UpdateLendDto) {
    return `This action updates a #${id} lend`;
  }

  remove(id: number) {
    return `This action removes a #${id} lend`;
  }
}
