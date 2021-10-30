import { Component, OnInit } from '@angular/core';
import { AppConstant } from '../../../constants/app-constants';
import { Validators, FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin = this.fb.group({
    userName: this.fb.control('', [Validators.required]),
    passWord: this.fb.control('', []),
  });
  mode: string = 'success';
  constructor(
    private cookieService: CookieService,
    private fb: FormBuilder,
    private authService: AuthService,
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
    this.authService.login(data).subscribe(
      (res) => {
        console.log(res);
        if (res) {
          this.cookieService.set(
            AppConstant.APP_COOKIE_TOKEN,
            res.tokens.access.token
          );
          this.router.navigate(['/user/survey']);
        }
      },
      (err) => {
        this.mode = 'error';
      }
    );
  }
  onChange() {
    this.mode = 'success';
  }

  goMain() {
    this.router.navigate(['/user/survey']);
  }
}
