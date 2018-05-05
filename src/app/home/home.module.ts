import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes
  ],
  declarations: [HomeComponent],
})
export class HomeModule { }
