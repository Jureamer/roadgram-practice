import { IsString, IsNumber, IsNotEmpty, IsOptional, IsBoolean, IsDate } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nickname: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  login_method: number;
}