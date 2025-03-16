import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Vehiculos } from '../entidad/vehiculos';
import { VehiculoService } from '../servicio/vehiculo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auto',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './auto.component.html',
  styleUrl: './auto.component.css'
})

export class AutoComponent implements OnInit {

  vehiculos:Vehiculos[];
  tipo:string;

  ngOnInit(): void {
  }

  constructor(private vehiculoService: VehiculoService, private router:Router) {}
  verDisponibles() {
    this.vehiculoService.disponibless(this.tipo).subscribe(datos => {
        console.log('Datos recibidos:', datos);

        if (!datos || (Array.isArray(datos) && datos.length === 0)) {
            alert("No hay vehículos disponibles para este tipo.");
            this.vehiculos = []; 
        } else if (!Array.isArray(datos)) {
            this.vehiculos = [datos]; 
        } else {
            this.vehiculos = datos; 
        }
      }, error => {
        console.error("Error en la solicitud:", error);
        alert("Error al obtener los datos. Verifica la conexión con el servidor.");
      }
    );
}
regresar(){
  this.router.navigate(['./admins'])
}

}

