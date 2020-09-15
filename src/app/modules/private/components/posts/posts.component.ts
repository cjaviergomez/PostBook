import { Component, OnInit, OnDestroy } from '@angular/core';
import { PublicacionService } from '../../services/publicacion.service';
import { AuthService } from '../../../../core/services/auth.service';
import { Observable, Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
declare let $: any; // Para trabajar con el modal

// Iconos
import { faSyncAlt, faPlus, faSync, faExclamation } from '@fortawesome/free-solid-svg-icons';

// Modelos
import { User } from '../../../../core/models/user';
import { NgForm } from '@angular/forms';
import { Publicacion } from '../../../../core/models/publicacion';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
	private ngUnsubscribe: Subject<any> = new Subject<any>();
	usuario: User = new User();
	public publicaciones: any[] = [];
	public publicacionesLocal: any[] = [];
	publicacion: Publicacion = new Publicacion();
	cargando = false;

	private paginaFinal = 1;
	private paginaActual = 1;
	finalDatos = false;

	faSyncAlt = faSyncAlt;
	faPlus = faPlus;
	faSync = faSync;
	faExclamation = faExclamation;

	// Para trabajar con la imagen
	uploadPercent: Observable<number>;
	urlImage;
	nameImageUp: string;

	constructor(
		private publicacionService: PublicacionService,
		private auth: AuthService,
		private storage: AngularFireStorage
	) {}

	ngOnInit(): void {
		this.getCurrentUser();
		this.obtenerPublicacionesLocal();
		this.obtenerPublicaciones();
	}

	// Metodo para saber si hay un usuario logeado actualmente.
	getCurrentUser(): void {
		this.auth
			.estaAutenticado()
			.pipe(takeUntil(this.ngUnsubscribe))
			.subscribe((user) => {
				if (user) {
					this.usuario.correo = user.email;
					if (user.displayName) {
						this.usuario.nombre = user.displayName;
					}
					if (user.photoURL) {
						this.usuario.foto = user.photoURL;
					}
				}
			});
	}

	/**
	 * Método para obtener las publicaciones de la API
	 */
	obtenerPublicaciones(): void {
		this.cargando = true;
		this.publicacionService.obtenerProductos(this.paginaActual).subscribe((data: any) => {
			this.paginaFinal = data.meta.pagination.pages;
			data.data.forEach((publicacion) => {
				this.publicaciones.push(publicacion);
			});
			this.cargando = false;
		});
	}

	/**
	 * Método para guardar una agregar una nueva publicación.
	 * @param form Formulario con la información de la nueva publicación.
	 */
	guardarPublicacion(form: NgForm): void {
		if (form.invalid) {
			return;
		} else {
			this.publicacionesLocal.unshift(this.publicacion);
			this.guardarEnLocal();
			this.cerrarModal(form);
		}
	}

	/**
	 * Método para cerrar el modal de crear una nueva unidad.
	 * @param form formulario a resetear.
	 */
	cerrarModal(form: NgForm): void {
		form.resetForm();
		this.nameImageUp = null;
		this.publicacion.image = null;
		$('#publicacionModal').modal('hide');
	}

	/**
	 * Método para obtener toda la información de la imagen a cargar a Firestore
	 * @param e evento que se activa al seleccion una imagen
	 */
	onUpload(e): void {
		const id = Math.random().toString(36).substring(2);
		const file = e.target.files[0];
		if (file) {
			this.nameImageUp = file.name;
		}
		const filePath = `img/picture_${id}`;
		const ref = this.storage.ref(filePath);
		const task = this.storage.upload(filePath, file);
		this.uploadPercent = task.percentageChanges();
		task
			.snapshotChanges()
			.pipe(
				finalize(
					() =>
						(this.urlImage = ref
							.getDownloadURL()
							.pipe(takeUntil(this.ngUnsubscribe))
							.subscribe((url) => {
								this.publicacion.image = url;
							}))
				)
			)
			.pipe(takeUntil(this.ngUnsubscribe))
			.subscribe();
	}

	/**
	 * Método para almacenar las publicaciones en el LocalStorage.
	 */
	guardarEnLocal() {
		localStorage.setItem('publicaciones', JSON.stringify(this.publicacionesLocal));
		this.obtenerPublicacionesLocal();
	}

	/**
	 * Método para obtener las publicaciones del LocalStorage
	 */
	obtenerPublicacionesLocal() {
		const data = JSON.parse(localStorage.getItem('publicaciones'));
		if (data) {
			this.publicacionesLocal = data;
		} else {
			this.publicacionesLocal = [];
		}
	}

	/**
	 * Método que se lanza al hacer scroll
	 */
	onScroll(): void {
		if (this.paginaActual < this.paginaFinal) {
			this.siguientePagina();
		} else {
			this.finalDatos = true;
		}
	}

	/**
	 * Método para obtener los datos de la siguiente página usando el scroll infinito.
	 */
	siguientePagina(): void {
		this.paginaActual++;
		this.publicacionService.obtenerProductos(this.paginaActual).subscribe((data: any) => {
			data.data.forEach((publicacion) => {
				this.publicaciones.push(publicacion);
			});
		});
	}

	/**
	 * Método para validar que la url de la imagen corresponda realmente a una imagen.
	 * @param event evento disparado al ocurrir el error.
	 */
	errorHandler(event) {
		event.target.src = 'https://cdn.browshot.com/static/images/not-found.png';
	}

	/**
	 * Este metodo se ejecuta cuando el componente se destruye
	 * Usamos este método para cancelar todos los observables.
	 */
	ngOnDestroy(): void {
		// End all subscriptions listening to ngUnsubscribe
		// to avoid memory leaks.
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}
