import { AuthService } from './../services/auth.service';
import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router: Router,
        private _authService: AuthService) { }

    public canActivate(): boolean {
        let loggedIn = false;

        if (this._authService.loggedIn) {
            loggedIn = true;
        } else {
            this._router.navigate(['/login'])
        }

        return loggedIn;
    }
}