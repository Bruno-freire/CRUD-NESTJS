import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseInterceptors } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-path-user.dto";
import { UserService } from "./user.service";
import { LogInterceptor } from "src/interceptors/log.interceptor";
import { ParamId } from "src/decorators/param-id.decorator";
import { Roles } from "src/decorators/roles.decorators";
import { Role } from "src/enums/role.enum";

@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService){}

  @Roles(Role.Admin)
  @Get()
  async list(){
    return this.userService.list()
  }

  @Roles(Role.Admin)
  @Get(':id')
  async show(@ParamId() id: number){
    return this.userService.show(id)
  }

  @Roles(Role.Admin)
  @Post()
  async create(@Body() body: CreateUserDTO) {
    return this.userService.create(body)
  }

  @Roles(Role.Admin)
  @Put(':id')
  async update(@Body() body: UpdateUserDTO, @ParamId() id: number) {
    return this.userService.update(id, body)
  }

  @Roles(Role.Admin)
  @Patch(':id')
  async updatePatial(@Body() body: UpdatePatchUserDTO, @ParamId() id: number) {
    return this.userService.updatePartial(id, body)
  }

  @Roles(Role.Admin)
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return this.userService.delete(id)
  }
}