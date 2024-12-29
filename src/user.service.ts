import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  addUser(user: User) {
    return {
      ...user,
      _id: '123',
      password: 'password',
    };
  }
}
