import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../../auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class LocalController {
  constructor(private authService: AuthService) {}

  // TODO: make internal
  @UseGuards(AuthGuard('local'))
  @Post('local/login')
  async login(@Request() req) {
    const jwt = await this.authService.login(req.user);
    return { ...req.user, ...jwt };
  }
}
