import { Component, OnInit } from '@angular/core';
import { Vehiculos } from '../entidad/vehiculos';
import { VehiculoService } from '../servicio/vehiculo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})
export class AdministradorComponent  implements OnInit{
   vehiculos:Vehiculos[];
    tipo:string;
    
  ngOnInit(): void {}

 constructor(private vehiculoService: VehiculoService) {}

 verDisponibles() {
  this.vehiculoService.disponibles(this.tipo).subscribe(datos => {
      console.log('Datos recibidos:', datos);

      // Si `datos` no es un array, lo convertimos en uno
      if (!Array.isArray(datos)) {
          this.vehiculos = [datos]; // Lo convertimos en un array
      } else {
          this.vehiculos = datos;
      }

      // Si no hay vehículos disponibles, informar al usuario
      if (!this.vehiculos.length) {
          console.warn('No hay vehículos disponibles.');
          alert('No hay vehículos disponibles para el tipo seleccionado.');
      }
  });
}








}
