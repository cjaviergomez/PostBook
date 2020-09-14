import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

// Iconos de Fontawesome
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

// Modelos
import { User } from '../../../../core/models/user';

// Servicios
import { AuthService } from '../../../../core/services/auth.service';
import { ShowMessagesService } from '../../../../core/services/show-messages.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public mostrar: boolean;

	// Iconos
	faEyeSlash = faEyeSlash;
	faEye = faEye;

	usuario: User = new User();

	constructor(private authService: AuthService, private swal: ShowMessagesService, private router: Router) {}

	ngOnInit(): void {
		this.mostrar = false;
	}

	/**
	 * Método para validar la información del usuario para permitirle iniciar sessión.
	 * @param form formulario con la informacion del usuario a loguear (correo y contraseña)
	 */
	onSubmit(form: NgForm): void {
		if (form.invalid) {
			return;
		}
		this.swal.showLoading();

		// Inicia sessión. Si el estado del usuario no es Activo, cierra la sesión.
		this.authService
			.login(this.usuario)
			.then((resp: any) => {
				this.swal.stopLoading();
				this.router.navigateByUrl('/modPrivate/posts');
			})
			.catch((err) => {
				this.swal.showErrorMessage(err.code);
			});
	}

	/**
	 * Método para cambiar la visibilidad de la contraseña.
	 * @param valor booleano para mostrar u ocultar la contraseña
	 */
	mostrarPass(valor: boolean): void {
		this.mostrar = valor;
	}
}
