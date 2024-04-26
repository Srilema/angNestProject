import { Body, Controller, Post, HttpCode, HttpStatus, Request, UseGuards, Get, } from '@nestjs/common';
import { AuthGuard  as MyGuard} from './auth.gard';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  signIn(@Request() req) {
    return this.authService.signIn(req.mail, req.pass);
  }
}

