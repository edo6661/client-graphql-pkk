import { Role, User } from "../__generated__/graphql";

export const mockUser : User = {
  username: "tempUsername",
  password: "tempPassword",
  email: "tempEmail",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  id:  "tempId",
  profilePhoto: "Temp",
  role: Role.Admin,
}