import { Routes } from '@angular/router';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { SolicitarAlquilerComponent } from './solicitar-alquiler/solicitar-alquiler.component';

export const routes: Routes = [

    {path: 'navegacion', component: NavegacionComponent},
    {path: 'login', component: LoginComponent},
    {path: 'usuarios',component:UsuarioComponent },
    {path: 'admins',component:AdministradorComponent },
    {path: 'register', component: RegistroComponent},
    {path: 'solicitar-alquiler', component: SolicitarAlquilerComponent},
    {path: 'loginAdmin', component: LoginAdminComponent}

];
