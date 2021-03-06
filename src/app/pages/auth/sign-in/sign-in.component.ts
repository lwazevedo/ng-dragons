import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng5-validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  emailTesting = 'dragons@dragons.com';
  passwordTestig = 'dragons123';
  submittingForm = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.baseLoginForm()
  }

  submitForm() {
    this.submittingForm = true;
    if (this.loginForm.invalid) return;

    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dragons']);
  }

  baseLoginForm() {
    this.loginForm = this.fb.group({
      'email': [this.emailTesting, [Validators.required,
      CustomValidators.email, CustomValidators.equal(this.emailTesting)]],
      'password': [this.passwordTestig, [Validators.required,
      CustomValidators.equal(this.passwordTestig)]]
    });
  }

  get f() { return this.loginForm.controls; }

}
