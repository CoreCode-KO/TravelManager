import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as moment from 'moment';

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
  today: Date = new Date();

  url: any = "https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png";

  constructor(public authService: AuthService, formBuilder: FormBuilder, private dateAdapter: DateAdapter<any>) {
    this.signUpForm = formBuilder.group({
      email: this.email,
      phone: this.phone,
      first_name: this.firstname,
      last_name: this.lastname,
      brith_date: this.brith_date,
      password: this.password,
    });
    this.dateAdapter.setLocale('pl');
  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
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
      this.signUpForm.get("brith_date")?.setValue(moment(this.signUpForm.get("brith_date")!.value).format("YYYY-MM-DD"));
      const formValue = this.signUpForm.value;
      this.authService.signUp(formValue);
    }
  }

}
