import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutes,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
