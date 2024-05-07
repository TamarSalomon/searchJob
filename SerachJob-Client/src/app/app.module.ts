import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs-list/jobs-list.component';
import { JobComponent } from './components/job/job.component';
import { BoldNameDirective } from './directives/bold-name.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    JobsComponent,
    JobComponent,
    BoldNameDirective,
    PageNotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
     provideClientHydration() 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
