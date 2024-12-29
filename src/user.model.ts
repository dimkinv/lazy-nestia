import { Type } from 'class-transformer';
import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    ValidateNested,
} from 'class-validator';

class Address {
  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  zip: string;
}

export class User {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ValidateNested()
  @Type(() => Address)
  address: Address;
}

// class Address {
//   @IsNotEmpty()
//   @IsString()
//   city: string = '';

//   @IsNotEmpty()
//   @IsString()
//   street: string = '';

//   @IsNotEmpty()
//   @IsString()
//   zip: string = '';
// }

// export class User {
//   @IsNotEmpty()
//   @IsString()
//   name: string = '';

//   @IsNotEmpty()
//   @IsNumber()
//   age: number = 0;

//   @IsNotEmpty()
//   @IsEmail()
//   email: string = '';

//   @ValidateNested()
//   @Type(() => Address)
//   address: Address = new Address();
// }
