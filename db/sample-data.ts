import { hashSync } from "bcrypt-ts-edge";

export const users = [
  {
    name: "John Doe",
    email: "admin@example.com",
    password: hashSync("123456", 10),
    role: "admin",
  },
  {
    name: "Jane Doe",
    email: "user@example.com",
    password: hashSync("123456", 10),
    role: "user",
  },
];
