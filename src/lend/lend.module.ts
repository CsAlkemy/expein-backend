import { Module } from '@nestjs/common';
import { LendService } from './lend.service';
import { LendController } from './lend.controller';

@Module({
  controllers: [LendController],
  providers: [LendService],
})
export class LendModule {}
