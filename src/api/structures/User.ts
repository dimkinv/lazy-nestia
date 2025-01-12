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
export namespace User {
  export type o1 = {
    name: string;
    age: number;
    email: string;
    address: {
      city: string;
      street: string;
      zip: string;
    };
  };
}
