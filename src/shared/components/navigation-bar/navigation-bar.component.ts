import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBar {

    constructor(private _authService: AuthService,
        private _router: Router) { }

    public logout(): void {
        this._authService.logout()
            .then((result: boolean) => {
                this._router.navigate(['login']);
            });
    }
}