import { IsNotEmpty } from 'class-validator';

export class CreateCipherDto {
  @IsNotEmpty()
  basePassword: string;

  @IsNotEmpty()
  key: string;
}
