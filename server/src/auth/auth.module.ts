import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [PrismaService, AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
