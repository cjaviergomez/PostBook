import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

// Componentes
import { PostsComponent } from './components/posts/posts.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{ path: 'posts', component: PostsComponent, canActivate: [AuthGuard] }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PrivateRoutingModule {}
