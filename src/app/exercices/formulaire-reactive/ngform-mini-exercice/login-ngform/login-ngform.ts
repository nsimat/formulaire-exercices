import { UserModel } from './../user.model';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [FormsModule],
  selector: 'app-login-ngform',
  styleUrl: './login-ngform.css',
  templateUrl: './login-ngform.html',
})
export class LoginNgForm {
  protected readonly user : UserModel = {
    email : signal(''),
    password : signal('')
  };

  protected login(): void {
    console.log({ email: this.user.email(), password: this.user.password() });

    // Emtying the form
    this.user.email.set('');
    this.user.password.set('');
  }
}
