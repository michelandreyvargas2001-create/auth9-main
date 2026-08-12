import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Michael Vargas',
    description: 'Nombre del usuario',
  })
  name: string;

  @ApiProperty({
    example: 'michael@gmail.com',
    description: 'Correo electrónico del usuario',
  })
  email: string;

  @ApiProperty({
    example: '123456',
    description: 'Contraseña del usuario',
  })
  password: string;
}