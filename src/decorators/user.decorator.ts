import { createParamDecorator, ExecutionContext, NotFoundException } from "@nestjs/common";

export const User = createParamDecorator((filter: string, contexto: ExecutionContext) => {
  const user = contexto.switchToHttp().getRequest().user

  if(!user){
    throw new NotFoundException("user not found in the request. Use auth Guard to get the user")
  }
  if(filter){
    return {
      user: user[filter],
      token: contexto.switchToHttp().getRequest().tokenPayload
    }
  } else {
    return {
      user,
      token: contexto.switchToHttp().getRequest().tokenPayload
    }
  }
})