import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Logger } from '@nestjs/common/services/logger.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(nom: string, mdp: string): Promise<any> {
    Logger.log("local.strategy 14" + nom + mdp)
    const utilisateur = await this.authService.signIn(nom, mdp);
    if (!utilisateur) {
        Logger.log("local.strategy 18" + utilisateur)
      throw new UnauthorizedException();
    }
    Logger.log("local.strategy 20" + utilisateur)
    return utilisateur;
  }
}