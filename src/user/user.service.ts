import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-path-user.dto";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService){}

  async create({email, name, password}: CreateUserDTO) {
    return this.prisma.user.create({
      data: {
        email,
        name,
        password
      }
    })
  }

  async list(){
    return this.prisma.user.findMany()
  }

  async show(id: number){
    return this.prisma.user.findUnique({
      where: {id}
    })
  }

  async update(id: number, {email, name, password}: UpdateUserDTO){
    return this.prisma.user.update({data: {email, name, password}, where: {id}})
  }

  async updatePartial(id: number, {email, name, password}: UpdatePatchUserDTO){
    return this.prisma.user.update({data: {email, name, password}, where: {id}})
  }
}