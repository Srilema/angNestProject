import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UtilisateursService } from '../utilisateurs/utilisateurs.service';
import { JwtService } from '@nestjs/jwt';
import { Logger } from '@nestjs/common/services/logger.service';

@Injectable()
export class AuthService {
  constructor(private utilisateursService: UtilisateursService, private jwtService: JwtService) {}

    // Get token and connect User
    async signIn(
      mail: string,
      pass: string,
    ): Promise<{ access_token: string, id: number }> {
      Logger.log("auth.service")
      const utilisateur = await this.utilisateursService.getOneUtilisateur(mail);
      Logger.log('auth.service 21' + utilisateur)
      //check if password are same
      if (utilisateur?.mdp !== pass) {
        Logger.log('auth.service 23');
        throw new UnauthorizedException();
      }
      //send the data to front: token + id user 
      //(Id user should be deleted when token handling function are implemented)
      const payload = { sub: utilisateur.id, mail: utilisateur.mail };
      return {
        access_token: await this.jwtService.signAsync(payload), 
        id: utilisateur.id,
      };
    }

    // Token Handling function incoming under
}

