import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-path-user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService){}

  @Get()
  async list(){
    return this.userService.list()
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id){
    return this.userService.show(id)
  }

  @Post()
  async create(@Body() body: CreateUserDTO) {
    return this.userService.create(body)
  }

  @Put(':id')
  async update(@Body() body: UpdateUserDTO, @Param('id', ParseIntPipe) id) {
    return this.userService.update(id, body)
  }

  @Patch(':id')
  async updatePatial(@Body() body: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id) {
    return this.userService.updatePartial(id, body)
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return {
      id
    }
  }
}