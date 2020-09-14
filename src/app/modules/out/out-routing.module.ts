import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
	{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'registro', component: RegistroComponent },
	{ path: 'inicio', component: InicioComponent },
	{ path: '**', component: InicioComponent } // IMPORTANTE: Esta ruta debe ser la última que se declare, si se declara una ruta despues de esta, siempre va a tomar esta.
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OutRoutingModule {}
