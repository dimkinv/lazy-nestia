import { TypedBody, TypedRoute } from '@nestia/core';
import {
  BadRequestException,
  Controller,
  InternalServerErrorException,
} from '@nestjs/common';
import api, { IConnection } from 'src/api';
import { User } from 'src/api/structures/User';

@Controller('/consumer')
export class ConsumerController {
  @TypedRoute.Post()
  async execute(@TypedBody() body: User): Promise<User> {
    const connection: IConnection = {
      host: 'http://localhost:3000',
      // simulate: true,
    };

    console.log('initiating api call');
    const response = await api.functional.users.addUser(connection, body);

    if (response.success) {
      return response.data;
    }

    if (response.status === 400) {
      throw new BadRequestException();
    }

    throw new InternalServerErrorException();
  }
}

// curl --location 'localhost:3000/consumer' \
// --header 'Content-Type: application/json' \
// --data-raw '{
//   "name": "John Doe",
//   "age": 30,
//   "email": "john.doe@example.com",
//   "address": {
//     "city": "New York",
//     "street": "123 Main St",
//     "zip": "10001"
//   }
// }'
