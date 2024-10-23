import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardDeportComponent } from './components/dashboard-deport/dashboard-deport.component';
import { RegistroComponent } from './components/registro/registro.component';


export const routes: Routes = [

    { path: '', component: LoginComponent },
    { path: 'dashboard-deport', component: DashboardDeportComponent },
    { path: 'registro', component: RegistroComponent },

];

