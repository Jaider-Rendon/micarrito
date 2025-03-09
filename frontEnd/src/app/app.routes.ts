import { Routes } from '@angular/router';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

export const routes: Routes = [

    {path: 'navegacion', component: NavegacionComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegistroComponent},
    {path: 'loginAdmin', component: LoginAdminComponent}

];
