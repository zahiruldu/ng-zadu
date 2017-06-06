import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule }   from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'login' },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent }
 ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AuthModule { }
export const AuthComponents = [LoginComponent, RegisterComponent];
