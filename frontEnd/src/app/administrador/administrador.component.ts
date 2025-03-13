import { AdministradorService } from './../servicio/administrador.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Alquiler } from '../entidad/alquiler';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'] // Corrección en `styleUrls`
})
export class AdministradorComponent implements OnInit {
  
  alquiler: Alquiler[] = []; 

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
    this.verDisponibles();

  }

  verDisponibles() {
    this.administradorService.obtenernoentregados().subscribe(
      (datos) => {
        console.log('Datos recibidos:', datos);
        this.alquiler = Array.isArray(datos) ? datos : [datos];
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
        alert('todos los autos han sido entregado');
      }
    );
  }
  actualizar(placa: string) {
    this.administradorService.gestionar(placa).subscribe(dato => {
      alert(dato);
      console.log(dato);
      window.location.reload();
    });
}
}
