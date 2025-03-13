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
  
  alquiler: Alquiler[] = []; // Inicializar como array vacío

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {}

  verDisponibles() {
    this.administradorService.obtenernoentregados().subscribe(
      (datos) => {
        console.log('Datos recibidos:', datos);

        // Asegurarse de que `datos` es un array
        this.alquiler = Array.isArray(datos) ? datos : [datos];

        // Si no hay alquileres disponibles, mostrar un mensaje
        if (this.alquiler.length === 0) {
          console.warn('No hay vehículos disponibles.');
          alert('No hay vehículos disponibles.');
        }
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
        alert('Hubo un error al cargar los datos.');
      }
    );
  }
}
