import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';

import { Connection, Model, models, Schema } from 'mongoose';

import { ENUMS } from '../enums';

@Injectable()
export class MongoService {
  constructor(@InjectConnection() private __connection: Connection) {}

  get connection() {
    return this.__connection;
  }

  private modelBuilder<T>(schema: Schema, collection: string) {
    if (models[collection]) return models[collection] as Model<T>;
    this.connection.model(collection, schema);
    return this.connection.model<T>(collection, schema);
  }

  getModel<T>(schema: Schema, collection: ENUMS.CollectionEnum): Model<T> {
    if (!schema || !(schema instanceof Schema)) {
      throw new InternalServerErrorException(
        HttpStatus.PRECONDITION_FAILED,
        `[mongo-service]-Invalid schema - ${collection}`,
      );
    }
    return this.modelBuilder<T>(schema, collection);
  }
}