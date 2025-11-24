import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'john_doe',
    description: 'Username of the user',
  })
  username: string;
  @ApiProperty({
    example: 'john_doe@example.com',
    description: 'Email address of the user',
  })
  email: string;
  @ApiProperty({
    example: 'hashed_password_12345',
    description: 'Hashed password for the user account',
  })
  password: string;
  @ApiProperty({
    example: 'admin',
    description: 'Permission level of the user',
  })
  permission: string;
}
