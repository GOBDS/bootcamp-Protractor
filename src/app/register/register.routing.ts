import { RegistrationCompleteComponent } from './registration-complete/registration-complete.component';
import { RegisterComponent } from './register.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'success', component: RegistrationCompleteComponent },
];

export const RegisterRoutes = RouterModule.forChild(routes);
