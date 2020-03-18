import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { ProjectComponent } from './project/project.component';
import { ReportComponent } from './report/report.component';
import { ShowPostComponent } from './show-post/show-post.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, children: [
      {path: '', component: ShowPostComponent},
      {path: 'post', component: PostComponent, pathMatch: 'full'},
      {path: 'project', component: ProjectComponent},
      {path: 'report', component: ReportComponent},
  ]},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
