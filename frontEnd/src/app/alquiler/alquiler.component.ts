import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Alquiler } from '../entidad/alquiler';
import { AdministradorService } from '../servicio/administrador.service';

@Component({
  selector: 'app-alquiler',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alquiler.component.html',
  styleUrl: './alquiler.component.css'
})
export class AlquilerComponent implements OnInit {

  ver: boolean = false; // Inicializado en false para evitar errores
  alquiler: Alquiler[] = []; 

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
    this.verDisponibles();
  }

  verDisponibles() {
    this.administradorService.obtenerTodos().subscribe( 
      (datos) => {
        console.log('Datos recibidos:', datos);
        this.alquiler = Array.isArray(datos) ? datos : [datos];
      },
      (error) => {
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



