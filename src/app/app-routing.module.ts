import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './Post/post-list/post-list.component';
import { PostCreateComponent } from './Post/post-create/post-create.component';

const routes: Routes = [
  { path : '' , component: HeaderComponent },
  { path : 'post', component: PostListComponent},
  { path: 'create', component: PostCreateComponent},
  { path: 'edit/:postId', component: PostCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
