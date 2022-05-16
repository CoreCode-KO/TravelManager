import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['../../styles/auth.component.scss']
})
export class SignInPageComponent {

  signInForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  constructor(public authService: AuthService, formBuilder: FormBuilder) {
    this.signInForm = formBuilder.group({
      email: this.email,
      password: this.password,
    });
  }

  getErrorMessage(field: string): string | void {
    // @ts-ignore
    const classField = this[field];
    if (classField?.hasError('required')) {
      return 'Musisz wprowadzić wartość';
    } else if (classField?.hasError('email')) {
      return 'Nieprawidłowy adres email';
    }
  }

  signIn() {
    if (this.signInForm.valid) {
      const formValue = this.signInForm.value;
      this.authService.signIn();
    }
  }

}
