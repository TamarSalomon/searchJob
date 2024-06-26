import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs-list/jobs-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: JobsComponent },
      { path: 'jobs', component: JobsComponent},
       { path: 'jobs/:jobField', component: JobsComponent }
     
    ]
  },
  { path: 'login', component: LoginComponent },
   {path:'**', component:PageNotFoundComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
