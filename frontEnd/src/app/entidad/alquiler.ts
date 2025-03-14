import { Vehiculo } from "../vehiculo";
import { LoginAdmin } from "./login-admin";
import { Usuario } from "./usuario";

export class Alquiler {
    numeroalquiler:number;
    fechasoli:Date;
    fechaentre:Date;
    valoralquiler:number;
    estadoalqui:string;
    fechaalquiler:Date;
    vehiculo:Vehiculo;
    usuario:Usuario;
    loginAdmi:LoginAdmin;
}
