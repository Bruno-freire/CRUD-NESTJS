import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../user/entity/user-entity';
import { userEntityList } from './user-entity-list-mock';

export const usersRepositoryMock = {
  provide: getRepositoryToken(UserEntity),
  useValue: {
    exist: jest.fn().mockResolvedValue(true),
    save: jest.fn().mockResolvedValue(userEntityList[0]),
    find: jest.fn().mockResolvedValue(userEntityList),
    findOne: jest.fn().mockResolvedValue(userEntityList[0]),
    update: jest.fn(),
    delete: jest.fn(),
  },
};
