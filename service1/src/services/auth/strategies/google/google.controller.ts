import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../../auth.service';

@Controller('auth/google')
export class GoogleController {
  constructor(private authService: AuthService) {
    return;
  }

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    return;
  }

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  async redirect(@Req() req) {
    const jwt = await this.authService.login(req.user);
    return { ...req.user, ...jwt };
  }
}
