import { Router } from '@angular/router';
import { Credentials } from './models/credentials.class';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private loginError = false;

  constructor(private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router) { }

  public ngOnInit() {
    if (this._authService.loggedIn) {
      this._router.navigate(['']);
    }

    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public get credentials(): Credentials {
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;
    return new Credentials(username, password);
  }

  public login(credentials: Credentials): void {
    const { username, password } = credentials;
    this._authService.login(username, password)
      .then((result: number) => {
        this._router.navigate(['home']);
      })
      .catch((error: number) => {
        // handle login failed
        this.loginError = true;
      });
  }
}