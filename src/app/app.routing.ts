import { AuthGuard } from './../shared/guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterModule' },
  { path: '**', redirectTo: '' }
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });