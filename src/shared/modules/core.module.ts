import { AuthService } from './../services/auth.service';
import { AuthGuard } from './../guards/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class CoreModule { }
