import { tags } from 'typia';

export type User = {
  name: string;
  age: number;
  email: string;
  address: {
    city: string;
    street: string;
    zip: string;
  };
};

export type UserAdvCodeValidation = {
  name: string & tags.MinLength<3>;
  age: number & tags.Minimum<18>;
  email: string & tags.Pattern<'^[^\\s@]+@[^\\s@]+\.[^\\s@]+$'>;
  address: {
    city: string;
    street: string;
    zip: string & tags.Pattern<'\\d{5}'>;
  };
};
