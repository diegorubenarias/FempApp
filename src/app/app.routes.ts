import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardDeportComponent } from './components/dashboard-deport/dashboard-deport.component';


export const routes: Routes = [

    { path: '', component: LoginComponent },
    { path: 'dashboard-deport', component: DashboardDeportComponent },

];

