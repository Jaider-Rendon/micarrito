import { Vehiculos } from './vehiculos';

import { LoginAdmin } from "./login-admin";
import { Usuario } from "./usuario";

export class Alquiler {
    numeroalquiler:number;
    fechasoli:Date;
    fechaentre:Date;
    valoralquiler:number;
    estadoalqui:string;
    fechaalquiler:string;
    vehiculo:Vehiculos;
    usuario:Usuario;
    loginAdmi:LoginAdmin;
}
