import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../servicio/vehiculo.service';
import { Vehiculos } from '../entidad/vehiculos';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {

  vehiculos:Vehiculos[];
  tipo:string;

  ngOnInit(): void {
  }

  constructor(private vehiculoService: VehiculoService) {}
  verDisponibles() {
    this.vehiculoService.disponibles(this.tipo).subscribe(datos => {
        console.log('Datos recibidos:', datos);

        if (!datos || (Array.isArray(datos) && datos.length === 0)) {
            alert("No hay vehículos disponibles para este tipo.");
            this.vehiculos = []; // Aseguramos que la lista quede vacía
        } else if (!Array.isArray(datos)) {
            this.vehiculos = [datos]; 
        } else {
            this.vehiculos = datos; // Asigna los datos correctamente si es un array válido
        }
      }, error => {
        console.error("Error en la solicitud:", error);
        alert("Error al obtener los datos. Verifica la conexión con el servidor.");
      }
    );
}

}

