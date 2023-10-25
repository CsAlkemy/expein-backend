import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Email of User',
    example: 'user@email.com',
    required: true,
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'User Bio',
    example: 'A short bio about the user',
    required: true,
  })
  @IsString()
  bio: string;

  @ApiProperty({
    description: 'User First Name',
    example: 'John',
    required: true,
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'User Last Name',
    example: 'Doe',
    required: true,
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'URL of User Avatar',
    example: 'https://example.com/avatar.jpg',
    required: false,
  })
  @IsString()
  @IsOptional()
  avatarUrl: string;

  @ApiProperty({
    description: 'User Twitter Profile URL',
    example: 'https://twitter.com/johndoe',
    required: false,
  })
  @IsString()
  @IsOptional()
  twitterUrl: string;

  @ApiProperty({
    description: 'User LinkedIn Profile URL',
    example: 'https://www.linkedin.com/in/johndoe',
    required: false,
  })
  @IsOptional()
  @IsString()
  linkedinUrl: string;
}
