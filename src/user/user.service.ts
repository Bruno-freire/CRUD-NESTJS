import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-path-user.dto';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user-entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async create({ email, name, password }: CreateUserDTO) {
    if (await this.usersRepository.exists({ where: { email } })) {
      throw new BadRequestException('Esté email já está em uso');
    }
    password = await bcrypt.hash(password, await bcrypt.genSalt());
    return await this.usersRepository.save({
      email,
      name,
      password,
    });
  }

  async list() {
    return this.usersRepository.find();
  }

  async show(id: number) {
    await this.exists(id);
    return this.usersRepository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    { email, name, password, birthAt, role }: UpdatePutUserDTO,
  ) {
    await this.exists(id);
    password = await bcrypt.hash(password, await bcrypt.genSalt());
    await this.usersRepository.update(Number(id), {
      email,
      name,
      password,
      birthAt: birthAt ? new Date(birthAt) : null,
      role,
    });
    return this.show(id);
  }

  async updatePartial(
    id: number,
    { email, name, password, birthAt, role }: UpdatePatchUserDTO,
  ) {
    await this.exists(id);
    const data: any = {};

    if (birthAt) {
      data.birthAt = new Date(data.birthAt);
    }

    if (email) {
      data.email = email;
    }

    if (name) {
      data.name = name;
    }

    if (password) {
      data.password = await bcrypt.hash(password, await bcrypt.genSalt());
    }
    if (role) {
      data.role = role;
    }
    await this.usersRepository.update(Number(id), data);
    return this.show(id);
  }

  async delete(id: number) {
    await this.exists(id);
    await this.usersRepository.delete(id);

    return true
  }

  async exists(id: number) {
    if (
      !(await this.usersRepository.exists({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException(`O usuário ${id} não existse.`);
    }
  }
}
