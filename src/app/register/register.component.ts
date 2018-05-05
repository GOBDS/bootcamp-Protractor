import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { ValidateMaskedInput } from './validators/masked-input-validator';
import { Subscription } from 'rxjs/Subscription';
//import { truncate } from 'fs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  private registerForm: FormGroup;
  private genderOptOutSubs: Subscription;
  private cellPhoneMask: (String | RegExp)[] = ['(', /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.registerForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      cellphone: ['', [Validators.required, ValidateMaskedInput('_')]],
      gender: ['', [Validators.required]],
      genderOptOut: [false],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.genderOptOutSubs = this.registerForm.controls['genderOptOut'].valueChanges
      .subscribe((value: boolean) => {
        const genderControl = this.registerForm.controls.gender;
        genderControl.setValue(undefined);
        if (genderControl) {
          genderControl.enabled ? genderControl.disable() : genderControl.enable();
        }
      });
  }

  public ngOnDestroy(): void {
    this.genderOptOutSubs && this.genderOptOutSubs.unsubscribe();
  }

  public fieldValue(fieldname: string): any {
    const field: AbstractControl = this.registerForm.controls[fieldname];

    if (field) {
      return field.value;
    }

    return undefined;
  }

  public hasError(fieldName: any): boolean {
    const field: AbstractControl = this.registerForm.controls[fieldName];
    return field && field.touched && field.errors && Object.keys(field.errors).length > 0;
  }

  public getError(fieldName: string): string | void {
    const field: AbstractControl = this.registerForm.controls[fieldName];
    if (field && field.errors) {
      return Object.keys(field.errors)[0];
    }

    return undefined;
  }

  public errorLabel(error: string, fieldName: string): string {
    console.log(error)
    switch (error) {
      case "required":
        return `${fieldName} is mandatory`;
      case "invalid":
        return `${fieldName} is invalid`;
      default:
        return "";
    }
  }

  public submitRegistration(): void {
    this._router.navigate(['success'], { skipLocationChange: false, relativeTo: this._activatedRoute });
  }
}