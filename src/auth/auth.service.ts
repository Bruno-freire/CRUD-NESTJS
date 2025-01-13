import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly JWTservice: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async createToken() {
    // return this.JWTservice.sign()
  }

  async checkToken(token: string) {
    // return this.JWTservice.verify(token)
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
    if (!user) {
      throw new UnauthorizedException('E-mail e/ou senha incorretos.');
    }
    return user;
  }

  async forget(email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      throw new UnauthorizedException('E-mail está incorreto.');
    }

    // TO DO: Enviar o email...

    return true;
  }

  async reset(password: string, token: string) {
    // TO DO: Validar o token...
    const id = 0;
    return this.prisma.user.update({
      where: { id },
      data: {
        password,
      },
    });

    return true
  }
}
