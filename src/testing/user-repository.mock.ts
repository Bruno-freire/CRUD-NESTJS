import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../user/entity/user-entity';

export const usersRepositoryMock = {
  provide: getRepositoryToken(UserEntity),
  useValue: {
    exists: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};
