import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UtilisateursService } from '../utilisateurs/utilisateurs.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private utilisateursService: UtilisateursService, private jwtService: JwtService) {}

  async signIn(user: any) {
    const payload = { mail: user.mail, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload)
    };

    /*async signIn(
      mail: string,
      pass: string,
    ): Promise<{ access_token: string }> {
      const utilisateur = await this.utilisateursService.getOneUtilisateur(mail);
      if (utilisateur?.mdp !== pass) {
        throw new UnauthorizedException();
      }
      const payload = { sub: utilisateur.id, mail: utilisateur.mail };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };*/
    }
}

