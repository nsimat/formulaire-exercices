import { WritableSignal } from '@angular/core';

export interface UserModel {
  email: WritableSignal<string>;
  password: WritableSignal<string>;
}
