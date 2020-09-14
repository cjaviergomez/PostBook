import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})

/**
 * Servicio para mostrar todos los mensajes en pantalla para el usuario.
 * Estos mensajes son generados con sweetalert2
 */
export class ShowMessagesService {
	showErrorMessage(code: string) {
		switch (code) {
			case 'auth/user-not-found': {
				Swal.fire({
					type: 'error',
					title: 'Error al autenticar',
					text: 'Correo no registrado. Por favor verifique que el correo sea el correcto o registrese.'
				});
				break;
			}
			case 'auth/wrong-password': {
				Swal.fire({
					type: 'error',
					title: 'Error al autenticar',
					text: 'Contraseña incorrecta. Intentelo de nuevo.'
				});
				break;
			}
			case 'auth/email-already-in-use': {
				Swal.fire({
					allowOutsideClick: false,
					type: 'error',
					title: 'Error al registrar',
					text: 'El correo ya esta en uso. Por favor intente con un correo diferente o inicie sesión.'
				});
				break;
			}
			case 'passActualError': {
				Swal.fire({
					type: 'error',
					title: 'Contraseña actual incorrecta',
					text: 'Por favor verifica que la contraseña actual sea correcta.'
				});
				break;
			}
			case 'auth/invalid-email': {
				Swal.fire({
					type: 'error',
					title: 'Correo no válido',
					text: 'Por favor verifica el correo.'
				});
				break;
			}
			default: {
				Swal.fire({
					type: 'error',
					title: 'Error',
					text: 'Ha ocurrido un error inesperado. Inténtalo nuevamente'
				});
				break;
			}
		}
	}

	showQuestionMessage(code: string, usuario?: User, estado?: string) {
		switch (code) {
			case 'delete': {
				return Swal.fire({
					title: 'Eliminar',
					text: `¿Estás seguro?`,
					type: 'question',
					showConfirmButton: true,
					showCancelButton: true
				});
			}

			default: {
				return Swal.fire({
					title: '¿Estás seguro?',
					text: `¿Estás seguro que deseas continuar ? `,
					type: 'question',
					showConfirmButton: true,
					showCancelButton: true
				});
			}
		}
	}

	showSuccessMessage(code: string) {
		switch (code) {
			case 'createAccountSuccess': {
				Swal.fire({
					allowOutsideClick: false,
					type: 'success',
					title: 'Registro Exitoso',
					text: '¡Genial! Tus datos se han registrado con éxito'
				});
				break;
			}
			default: {
				Swal.fire({
					type: 'success',
					title: 'Éxito',
					text: 'La acción se realizó con éxito'
				});
				break;
			}
		}
	}

	showLoading() {
		Swal.fire({
			allowOutsideClick: false,
			type: 'info',
			text: 'Espere por favor...'
		});
		Swal.showLoading(); // Iniciamos el loading.
	}

	stopLoading() {
		Swal.close(); // Paramos el loading.
	}
}
