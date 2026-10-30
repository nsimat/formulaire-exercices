import { Routes } from '@angular/router';
import { LoginNgForm } from './exercices/formulaire-reactive/ngform-mini-exercice/login-ngform/login-ngform';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'login-form-control', component: LoginNgForm }
];
