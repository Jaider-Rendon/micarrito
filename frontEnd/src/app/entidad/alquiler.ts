import { Vehiculos } from './vehiculos';
import { LoginAdmin } from "./login-admin";
import { Usuario } from "./usuario";

export class Alquiler {
    numeroalquiler: number;
    fechasoli: Date;
    fechaentre: Date;
    valoralquiler: number;
    estadoalqui: string;
    fechaalquiler: Date;  // O cambiar a string si así lo necesitas
    vehiculo: Vehiculos;  // Verifica el nombre correcto de la clase
    usuario: Usuario;
    loginAdmi: LoginAdmin;
}
