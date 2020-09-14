import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OutRoutingModule } from './out-routing.module';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
	declarations: [LoginComponent, RegistroComponent, InicioComponent],
	imports: [CommonModule, OutRoutingModule, FormsModule, ReactiveFormsModule, FontAwesomeModule]
})
export class OutModule {}
