import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('/users')
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post()
  addUser(@Body() user: User): User {
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
//     "street": "123 Main St"
//   }
// }'

// curl --location 'localhost:3000/users' \
// --header 'Content-Type: application/json' \
// --data-raw '{
//   "name": "John Doe",
//   "email": "john.doe@example.com",
//   "address": {
//     "city": "New York",
//     "street": "123 Main St",
//     "zip": "10001"
//   }
// }'
