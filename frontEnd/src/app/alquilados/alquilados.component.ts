import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { AdministradorService } from '../servicio/administrador.service';
import { Alquiler } from '../entidad/alquiler';

@Component({
  selector: 'app-alquilados',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './alquilados.component.html',
  styleUrl: './alquilados.component.css'
})
export class AlquiladosComponent {
 cedula:number 
 alquiler: Alquiler[] = []; 
 constructor(private administradorService: AdministradorService,private router:Router) {}
 
 


 verDisponibles() {
  console.log("Buscando alquileres para cédula:", this.cedula);
  this.administradorService.buscar(this.cedula).subscribe({
    next: (datos) => {
      console.log("Datos recibidos:", datos);
      this.alquiler = Array.isArray(datos) ? datos : datos ? [datos] : [];
      if (this.alquiler.length === 0) {
        alert("No hay alquileres con esta cédula");
      }
    },
    error: (error) => {
      console.error("Error al obtener alquileres:", error);
    }
  });
}

cancelar(idAl:number){
  this.administradorService.cancelar(idAl).subscribe(dato=>{
    this.verDisponibles()
  })

}
volver(){
  this.router.navigate(['./usuarios'])

}
}

