import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { LoginComponent } from './modules/out/components/login/login.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'modOut', pathMatch: 'full' },
	{ path: 'modOut', loadChildren: () => import('./modules/out/out.module').then((m) => m.OutModule) },
	{
		path: 'modPrivate',
		loadChildren: () => import('./modules/private/private.module').then((m) => m.PrivateModule)
	},
	{ path: '**', redirectTo: 'modOut', pathMatch: 'full' } // IMPORTANTE: Esta ruta debe ser la última que se declare, si se declara una ruta despues de esta, siempre va a tomar esta.
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
