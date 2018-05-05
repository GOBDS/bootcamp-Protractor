import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    private _loggedIn: boolean = false;

    constructor() {
        this._loggedIn = localStorage.getItem('logged_in') ? true : false;
    }

    private openSession(): void {
        localStorage.setItem('logged_in', 'true');
        this._loggedIn = true;
    }

    private closeSession(): void {
        localStorage.removeItem('logged_in');
        this._loggedIn = false;
    }

    /**
     * Performs login based on username/password combination
     * @param username  The username
     * @param password  The password
     */
    public login(username: string = '', password: string = ''): Promise<number> {
        return new Promise((resolve, reject) => {
            if ((username.trim() === 'admin@venturus.org.br') && (password.trim() === 'admin')) {
                this.openSession();
                return resolve(200);
            } else {
                return reject(401);
            }
        });
    }

    public logout(): Promise<boolean> {
        if (this.loggedIn) {
            this.closeSession();
            return Promise.resolve(true);
        }

        return Promise.resolve(false);
    }

    public get loggedIn() {
        return this._loggedIn;
    }
}