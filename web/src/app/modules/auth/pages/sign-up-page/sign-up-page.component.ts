import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { AuthService } from 'src/app/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['../../styles/auth.component.scss'],
})
export class SignUpPageComponent {

  signUpForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);
  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  brith_date = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  repassword = new FormControl('', [Validators.required]);
  today: Date = new Date();

  url: any = "https://images.unsplash.com/photo-1552083974-186346191183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  constructor(public authService: AuthService, formBuilder: FormBuilder, private dateAdapter: DateAdapter<any>) {
    this.signUpForm = formBuilder.group({
      email: this.email,
      phone: this.phone,
      firstname: this.firstname,
      lastname: this.lastname,
      brith_date: this.brith_date,
      password: this.password,
      repassword: this.repassword,
    });
    this.dateAdapter.setLocale('pl');
  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target?.result;
      }
    }
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

  signUp() {
    if (this.signUpForm.valid) {
      const formValue = this.signUpForm.value;

    }
  }

}
