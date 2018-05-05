import { NavigationBar } from './../shared/components/navigation-bar/navigation-bar.component';
import { SharedModule } from './../shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { LoginModule } from './login/login.module';
import { CoreModule } from '../shared/modules/core.module';

@NgModule({
  imports: [
    AppRoutes,
    BrowserModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    NavigationBar
  ],
  providers: [
    //
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
