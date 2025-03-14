import { AdministradorService } from './../servicio/administrador.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Alquiler } from '../entidad/alquiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'] // Corrección en `styleUrls`
})
export class AdministradorComponent implements OnInit {
  ver:boolean
  alquiler: Alquiler[] = []; 

  constructor(private administradorService: AdministradorService,private router:Router) {}

  ngOnInit(): void {
    this.verDisponibles();

  }

  verDisponibles() {
    this.administradorService.obtenernoentregados().subscribe(
      (datos) => {
        console.log('Datos recibidos:', datos);
        this.alquiler = Array.isArray(datos) ? datos : [datos];
      },error => {
        console.error('Error en la solicitud:', error);
        alert('Ocurrió un error al intentar iniciar sesión.');}
    ); ;}
  actualizar(placa: string) {
    this.administradorService.gestionar(placa).subscribe(dato => {
      alert(dato);
      console.log(dato);
      window.location.reload();
    });
}
goku(){
  this.ver = false;
    this.router.navigate(['./alquiler'])
}
vegueta(){
    this.router.navigate(['./auto'])
}
regresar(){
  this.router.navigate(["./loginAdmin"])
}
}
