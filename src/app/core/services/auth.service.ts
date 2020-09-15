import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

// Para trabajar con AngularFire2
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

// Models
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private afsAuth: AngularFireAuth) {}

	// Metodo para autenticar.
	nuevoUsuario(User: User) {
		return new Promise((resolve, reject) => {
			this.afsAuth.auth
				.createUserWithEmailAndPassword(User.correo, User.password)
				.then((userData) => {
					resolve(userData);
				})
				.catch((err) => console.log(reject(err)));
		});
	}

	// Loguear a un User con correo y contraseña.
	login(User: User) {
		return new Promise((resolve, reject) => {
			this.afsAuth.auth.signInWithEmailAndPassword(User.correo, User.password).then(
				(userData) => resolve(userData),
				(err) => reject(err)
			);
		});
	}

	loginSocial(proveedor: string) {
		if (proveedor === 'google') {
			return this.afsAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
		} else {
			return this.afsAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
		}
	}

	// Metodo para 'cerrar la sessión' de un User
	logout() {
		return this.afsAuth.auth.signOut();
	}

	getAuth() {
		return this.afsAuth.auth;
	}

	// Metodo para comprobar si un User esta logueado.
	estaAutenticado() {
		return this.afsAuth.authState.pipe(map((auth) => auth));
	}
}
