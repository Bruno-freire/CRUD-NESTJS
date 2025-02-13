import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { usersRepositoryMock } from '../testing/user-repository.mock';
import { CreateUserDTO } from './dto/create-user.dto';
import { Role } from '../enums/role.enum';
import { UserEntity } from './entity/user-entity';
import { userEntityList } from '../testing/user-entity-list-mock';
import { createUserDTO } from '../testing/create-user-dto.mock';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { updatePutUserDTO } from '../testing/update-put-user-dto.mock';
import { updatePatchUserDTO } from '../testing/update-patch-user-dto.mock';

describe('UserService', () => {
  let userService: UserService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, usersRepositoryMock],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get(getRepositoryToken(UserEntity));
  });

  it('Validar a definição', () => {
    expect(userService).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  describe('Create', () => {
    it('method create', async () => {
      jest.spyOn(userRepository, 'exist').mockResolvedValueOnce(false);

      const result = await userService.create(createUserDTO);

      expect(result).toEqual(userEntityList[0]);
    });
  });
  describe('Read', () => {
    it('method read', async () => {
      const result = await userService.list();

      expect(result).toEqual(userEntityList);
    });
    it('method show', async () => {
      const result = await userService.show(1);

      expect(result).toEqual(userEntityList[0]);
    });
  });
  describe('Update', () => {
    it('method update', async () => {
      const result = await userService.update(1, updatePutUserDTO);

      expect(result).toEqual(userEntityList[0]);
    });
    it('method updatePartial', async () => {
      const result = await userService.updatePartial(1, updatePatchUserDTO);

      expect(result).toEqual(userEntityList[0]);
    });
  });
  describe('Delete', () => {
    it('method delete', async () => {
      const result = await userService.delete(1);

      expect(result).toEqual(true);
    });
  });
});
