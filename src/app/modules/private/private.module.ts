import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
	declarations: [PostsComponent],
	imports: [
		CommonModule,
		PrivateRoutingModule,
		HttpClientModule,
		FormsModule,
		FontAwesomeModule,
		InfiniteScrollModule
	],
	exports: []
})
export class PrivateModule {}
