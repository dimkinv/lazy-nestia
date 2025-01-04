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
  age: number & tags.Minimum<12>;
  email: string & tags.Pattern<'^[^@]+@[^@]+\\.[^@]+$'>;
  address: {
    city: string;
    street: string;
    zip: string & tags.Pattern<'\\d{5}'>;
  };
};

export type UserAdvCommentValidation = {
  /**
   * @minLength 3
   */
  name: string;
  /**
   * @minimum 18
   */
  age: number;
  /**
   * @Pattern ^[^\s@]+@[^\s@]+\.[^\s@]+$
   */
  email: string;
  address: {
    city: string;
    street: string;
    /**
     * @Pattern \d{5}
     */
    zip: string;
  };
};
