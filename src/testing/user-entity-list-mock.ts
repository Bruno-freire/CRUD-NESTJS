import { Role } from "../enums/role.enum";
import { UserEntity } from "../user/entity/user-entity";

export const userEntityList: UserEntity[] = [
  {
    name: 'bruno',
    email: "brunofreire@gmail.com",
    birthAt: new Date('2000-01-01'),
    id: 1,
    password: "$2b$10$0i5HoGZYAQV84iTQRl8uQOrY9hCcVK7J5UFDw.21o3lqKJWz5LAqW",
    role: Role.User,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'glaucio',
    email: "glaucio@gmail.com",
    birthAt: new Date('2000-01-01'),
    id: 2,
    password: "$2b$10$0i5HoGZYAQV84iTQRl8uQOrY9hCcVK7J5UFDw.21o3lqKJWz5LAqW",
    role: Role.User,
    createdAt: new Date(),
    updatedAt: new Date()
  },
]