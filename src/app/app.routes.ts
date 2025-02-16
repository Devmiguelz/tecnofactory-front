import { Routes } from '@angular/router';
import { LoginComponent } from './page/auth/components/login/login.component';
import { RegisterComponent } from './page/auth/components/register/register.component';
import { AuthGuard } from './core/guard/auth.guard';
import { LoginGuard } from './core/guard/login.guard';

export const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent, 
        canActivate: [LoginGuard]
    },
    { path: 'register', component: RegisterComponent },
    {
        path: 'dashboard',
        loadChildren: () => import('./page/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
        canActivate: [AuthGuard]
    },    
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' } 
];
