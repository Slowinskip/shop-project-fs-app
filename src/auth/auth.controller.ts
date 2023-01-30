import {
  Controller,
  UseGuards,
  Request,
  Delete,
  Response,
} from '@nestjs/common';
import { Injectable, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dtos/register.dtos';
import { JwtAuthGuard } from './strategy and guard/jwt.guard';
import { LocalAuthGuard } from './strategy and guard/local.guard';
@Controller('auth-module')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  public register(@Body() userData: RegisterDTO) {
    return this.authService.register(userData);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Response() res) {
    const tokens = await this.authService.createSession(req.user);
    res.cookie('auth', tokens, { httpOnly: true });
    res.send({
      message: 'success',
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/logout')
  async logout(@Response() res) {
    res.clearCookie('auth', { httpOnly: true });
    res.send({
      message: 'success',
    });
  }
}
