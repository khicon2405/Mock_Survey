import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formLogin = this.fb.group({
    userName: this.fb.control('', [Validators.required]),
    passWord: this.fb.control('', [Validators.required]),
    re_passWord: this.fb.control('', [Validators.required]),
  });
  mode: string = 'success';
  constructor(
    
    private fb: FormBuilder,
    
    private router: Router
  ) {}

  ngOnInit(): void {}

  get username() {
    return this.formLogin.get('userName');
  }
  get password() {
    return this.formLogin.get('passWord');
  }

  onSubmit() {
    const data = {
      username: this.formLogin.controls.userName.value,
      password: this.formLogin.controls.passWord.value,
    };
    console.log(data);
    
  }
  onChange() {
    this.mode = 'success';
  }

}
