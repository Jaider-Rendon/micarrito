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

        // Si datos no es un array, lo convertimos en uno
        if (!Array.isArray(datos)) {
            this.vehiculos = [datos]; // Lo convertimos en un array
        } else {
            this.vehiculos = datos;
        }
    });
}
  

}

