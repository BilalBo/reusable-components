import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({providedIn: 'root'})

export class AuhtenticationService {
  isLoggedIn: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.isLoggedIn = firebaseAuth.authState;
  }

  async signin(email: string, password: string) {
    await this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async signout() {
    await this.firebaseAuth.auth.signOut();
  }
}
