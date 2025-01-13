import { IsDateString, IsEmail, IsOptional, IsString, IsStrongPassword } from 'class-validator';

export class AuthRegisterDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsDateString()
  birthAt: string;

  @IsStrongPassword({
    minLength: 6,
  })
  password: string;
}
