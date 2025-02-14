import { Role } from "../../enums/role.enum";
import { UpdatePutUserDTO } from "../../user/dto/update-put-user.dto";

export const updatePutUserDTO: UpdatePutUserDTO = {
  birthAt: '2000-01-01',
  email: 'brunofreire@gmail.com',
  name: 'bruno',
  password: '123456aA@',
  role: Role.User,
};
