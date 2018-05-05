import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-complete',
  templateUrl: './registration-complete.component.html',
  styleUrls: ['./registration-complete.component.css']
})
export class RegistrationCompleteComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    //  
  }

  public backToLogin(): void {
    this._router.navigate(['login']);
  }
}
