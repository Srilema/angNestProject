import { Body, Controller, Post, HttpCode, HttpStatus, Request, UseGuards, Get, } from '@nestjs/common';
import { AuthGuard  as MyGuard} from './auth.gard';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Logger } from '@nestjs/common/services/logger.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //@UseGuards(AuthGuard('local'))
  @Post('login')
  signIn(@Request() req) {
    Logger.log("auth.controller l13")
    return this.authService.signIn(req.mail, req.pass);
  }

  /*@UseGuards(AuthGuard('local'))
  @Get('account')
  getDataUser(@Request() req){
    return this.authService.getData(req)
  };*/
}

