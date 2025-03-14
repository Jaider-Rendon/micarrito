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
  this.administradorService.buscar(this.cedula).subscribe( 
    (datos) => {
      console.log('Datos recibidos:', datos);
      this.alquiler = Array.isArray(datos) ? datos : [datos];
    },
    (error) => {
    }
  );


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

