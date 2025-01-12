import { TypedBody, TypedRoute } from '@nestia/core';
import { Controller, Get, Param } from '@nestjs/common';
import { User, UserAdvCodeValidation } from './user.model';
import { UserService } from './user.service';

@Controller('/users')
export class AppController {
  constructor(private readonly userService: UserService) {}

  @TypedRoute.Post()
  addUser(@TypedBody() user: UserAdvCodeValidation): User {
    console.log('inside addUser in AppController');
    return this.userService.addUser(user);
  }

  @Get('/:userId')
  getUser(@Param('userId') userId:string): User {
    console.log('inside addUser in AppController');
    return {
      address: {
        city: 'Tel Aviv',
        street: 'Hertzl',
        zip: '12345'
      },
      age: 18,
      email: 'israel@israeli@gmail.com',
      name: 'Israel'
    }
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
