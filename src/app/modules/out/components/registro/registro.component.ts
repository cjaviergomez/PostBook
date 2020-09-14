import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// Models
import { User } from '../../../../core/models/user';

// Services
import { ShowMessagesService } from '../../../../core/services/show-messages.service';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['../login/login.component.css']
})
export class RegistroComponent {
	usuario: User = new User();

	constructor(private swal: ShowMessagesService, private authService: AuthService, private router: Router) {}

	/**
	 * Método para registrar el usuario.
	 * @param form formulario con la información del usuario
	 */
	onSubmit(form: NgForm): void {
		if (form.invalid) {
			return;
		}

		this.swal.showLoading();
		this.authService
			.nuevoUsuario(this.usuario) // Metodo para guardar en firebase auth al usuario.
			.then((resp) => {
				this.swal.stopLoading(); // Cerramos el loading
				// Mostramos un mensaje de exito para indicarle al usuario que se creó el usuario correctamente.
				this.swal.showSuccessMessage('createAccountSuccess');
				this.router.navigateByUrl('/modPrivate/posts');
			})
			.catch((err) => {
				this.swal.showErrorMessage(err.code);
			});
	} // end onSubmit
}
