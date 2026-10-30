import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import { LoginNgForm } from './exercices/formulaire-reactive/ngform-mini-exercice/login-ngform/login-ngform';

@Component({
  imports: [RouterOutlet, RouterLinkWithHref, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('formulaire');
}
