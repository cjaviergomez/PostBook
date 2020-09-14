import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

// Modelos
import { User } from '../../../../core/models/user';

// Servicios
import { AuthService } from 'app/core/services/auth.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	public titleApp = 'PostBook';
	public islogged = false;
	usuario: User = new User();
	private ngUnsubscribe: Subject<any> = new Subject<any>();

	constructor(private auth: AuthService, private router: Router) {}

	ngOnInit(): void {
		this.getCurrentUser();
	}

	// Metodo para cerrar la sesiòn de un usuario haciendo uso del servicio
	salir(): void {
		this.auth.logout().then((data) => {
			this.router.navigate(['/modOut/login']);
		});
	}

	// Metodo para saber si hay un usuario logeado actualmente.
	getCurrentUser(): void {
		this.auth
			.estaAutenticado()
			.pipe(takeUntil(this.ngUnsubscribe))
			.subscribe((user) => {
				if (user) {
					this.usuario.correo = user.email;
					this.islogged = true;
				} else {
					this.islogged = false;
				}
			});
	}
}
