import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './ angular-material.module';

import { ToastrModule } from 'ngx-toastr';
// services
import { InterceptorService } from './_services/interceptor.service';
import { UserService } from './_services/user.service';
import { EnrollService } from './enroll.service';
import { PostsService } from './post.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { PostComponent } from './post/post.component';
import { ProjectComponent } from './project/project.component';
import { ReportComponent } from './report/report.component';

// Material
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatIconModule,
  MatSidenavModule,
  MatTabsModule,
  MatStepperModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatAutocompleteModule
} from '@angular/material'; // To import the angular material

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    PostComponent,
    ProjectComponent,
    ReportComponent,
    ShowPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    AngularMaterialModule,
    MatInputModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatAutocompleteModule
  ],
  providers: [UserService, EnrollService, PostsService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }], //
  bootstrap: [AppComponent]
})
export class AppModule { }
