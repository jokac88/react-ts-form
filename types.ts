export interface User {
  email: string;
  age: number;
  name: string;
  phone: {
    ext: string;
    number: string;
  };
}