import { Injectable, Logger } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service'; // Adjust the import path as necessary

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<User | null> {
    this.logger.verbose(`Finding user with email: ${email}`);
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      this.logger.verbose(`User with email ${email} not found`);
      return null;
    }
    return user;
  }
}
