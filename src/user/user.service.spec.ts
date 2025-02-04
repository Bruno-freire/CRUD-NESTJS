import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from './entity/user-entity';
import { usersRepositoryMock } from '../testing/user-repository.mock';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        usersRepositoryMock
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('Validar a definição', () => {
    expect(userService).toBeDefined();
  });
});
