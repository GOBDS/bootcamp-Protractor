import { AuthService } from './../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router: Router) { }

  public ngOnInit() {
    //
  }

  public leave(): void {
    this._authService.logout().then(() => this._router.navigate(['login']));
  }
}