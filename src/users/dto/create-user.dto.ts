export class CreateUserDto {
  email: string;
  password: string;
  profile: {
    firstName: string;
    lastName: string;
    avatarUrl: string;
    bio: string;
    socialLinks: {
      twitter: string;
      linkedin: string;
    };
  };
  createdAt: Date;
  updatedAt: Date;
}
