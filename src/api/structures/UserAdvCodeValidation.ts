import type { Minimum } from "typia/lib/tags/Minimum";
import type { MinLength } from "typia/lib/tags/MinLength";
import type { Pattern } from "typia/lib/tags/Pattern";

export type UserAdvCodeValidation = {
  name: string & MinLength<3>;
  age: number & Minimum<12>;
  email: string & Pattern<"^[^@]+@[^@]+\\.[^@]+$">;
  address: {
    city: string;
    street: string;
    zip: string & Pattern<"\\d{5}">;
  };
};
