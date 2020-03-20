import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';

/*Componenets */
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { ProjectComponent } from './project/project.component';
import { ReportComponent } from './report/report.component';
import { ShowPostComponent } from './show-post/show-post.component';



const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: '', component: ShowPostComponent},
    {path: 'post', component: PostComponent, pathMatch: 'full'},
    {path: 'edit/:postId', component: PostComponent, pathMatch: 'full'},
    {path: 'project', component: ProjectComponent, pathMatch: 'full'},
    {path: 'report', component: ReportComponent},
]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
