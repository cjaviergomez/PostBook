import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../../../configs/AppSettings';

@Injectable({
	providedIn: 'root'
})
export class PublicacionService {
	private url_productos = GLOBAL.url + 'products';
	constructor(public http: HttpClient) {}

	/**
	 * Método para obtener todos los productos almacenados en la base de datos
	 */
	obtenerProductos(pagina) {
		return this.http.get(this.url_productos + `?page=${pagina}`);
	}
}
