import { TypedBody, TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('/users')
export class AppController {
  constructor(private readonly userService: UserService) {}

  @TypedRoute.Post()
  addUser(@TypedBody() user: User): User {
    return this.userService.addUser(user);
  }
}

// curl --location 'localhost:3000/users' \
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

// curl --location 'localhost:3000/users' \
// --header 'Content-Type: application/json' \
// --data-raw '{
//   "name": "John Doe",
//   "email": "john.doe@example.com",
//   "age": 30,
//   "address": {
//     "city": "New York",
//     "street": "123 Main St",
//     "zip": "10001"
//   }
// }'
