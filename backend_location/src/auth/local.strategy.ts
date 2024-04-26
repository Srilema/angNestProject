import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(nom: string, mdp: string): Promise<any> {
    const utilisateur = await this.authService.signIn(nom, mdp);
    if (!utilisateur) {
      throw new UnauthorizedException();
    }
    return utilisateur;
  }
}