import { Component } from '@angular/core';
import { AuhtenticationService } from './auhtentication.service';
import * as firebase from 'firebase';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  isLoggedIn = false;
  loginCard = false;

  constructor(private authService: AuhtenticationService, private alertService: AlertService) {
    authService.isLoggedIn.subscribe((result: firebase.User) => this.isLoggedIn = !!(result && result.uid));
  }

  signin() {
    this.authService.signin('bilal@bilal.com', '1111aaaa').then(() => {
      this.loginCard = false;
      this.alertService.success('Bienvenido de nuevo {NOMBRE USUARIO}');
    })
      .catch(({code}) => {
        let errorMessage = 'Ha habido un error iniciando sesión';
        if (code === 'auth/wrong-password') {
          errorMessage = 'Vaya, parece que esa no es la contraseña :S';
        }
        this.alertService.error(errorMessage);
      });
  }

  signout() {
    this.authService.signout().then(() => this.alertService.success('Vuelve pronto :('));
  }


}
