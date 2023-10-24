import { Module } from '@nestjs/common';
import { LendService } from './lend.service';
import { LendController } from './lend.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LendSchema } from './schema/lend.schema';

@Module({
  controllers: [LendController],
  imports: [
    MongooseModule.forFeature([{ name: 'Lend', schema: LendSchema }]),
  ],
  providers: [LendService],
})
export class LendModule {}
