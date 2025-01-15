import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "src/auth/auth.service";
import { UserService } from "src/user/user.service";

interface AuthenticatedRequest  extends Request{
  tokenPayload: any
  user: object
} 

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private readonly userService: UserService){}

  async canActivate(context: ExecutionContext){
    
    const request: AuthenticatedRequest  = context.switchToHttp().getRequest()
    const {authorization} = request.headers
    try {
      const data = this.authService.checkToken((authorization ?? '').split(' ')[1])
      request.tokenPayload = data  
      request.user = await this.userService.show(data.id)
      return true
    } catch (error) {
      return false      
    }
  }

}