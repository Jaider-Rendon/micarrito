import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../servicio/vehiculo.service';
import { AlquilerService } from '../servicio/alquiler.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import { Alquiler } from '../entidad/alquiler';
import { Usuario } from '../entidad/usuario';
import { Vehiculos } from '../entidad/vehiculos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitar-alquiler',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './solicitar-alquiler.component.html',
  styleUrls: ['./solicitar-alquiler.component.css']
})
export class SolicitarAlquilerComponent implements OnInit {
  tipo: string = '';
  vehiculos: Vehiculos[] = [];
  placaSeleccionada: string = '';
  fechaInicio: string = '';
  fechaEntrega: string = '';
  mensaje: string = '';
  nIdentificacion: string = '';
  alquiler: Alquiler | null = null;
  alquilerExitoso: boolean = false;
  usuario: Usuario[] = [];

  constructor(private vehiculoService: VehiculoService, private alquilerService: AlquilerService,private router:Router) {}

  ngOnInit(): void {}

  verDisponibles() {
    this.vehiculoService.disponibles(this.tipo).subscribe(datos => {
      this.vehiculos = datos;
      if (this.vehiculos.length === 0) {
        alert("No hay vehículos disponibles para este tipo.");
      }
    }, error => {
      alert("Error al obtener los vehículos.");
    });
  }

  solicitarAlquiler() {
    if (!this.placaSeleccionada || !this.fechaInicio || !this.fechaEntrega || !this.nIdentificacion) {
      alert("Debe completar todos los campos.");
      return;
    }

    const datosAlquiler = {
      nIdentificacion: this.nIdentificacion, 
      placa: this.placaSeleccionada,
      fechaInicio: this.fechaInicio,
      fechaEntrega: this.fechaEntrega
    };

    this.alquilerService.solicitarAlquiler(datosAlquiler).subscribe(
      (response: Alquiler) => {
        console.log("Respuesta del backend:", response);
        this.alquiler = response;
        this.alquilerExitoso = true;
        alert("Alquiler solicitado con éxito.");
      },
      error => {
        alert("error alquiler ya fue solicitado" );
      }
    );
  }

  generarPDF() {
    if (!this.alquiler) {
      alert("No hay datos de alquiler para generar el PDF.");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Detalles del Alquiler', 14, 20);

    const cliente = this.alquiler.usuario as Usuario;
    const vehiculo = this.alquiler.vehiculo as Vehiculos;

    console.log("Cliente en PDF:", cliente);
    console.log("Vehículo en PDF:", vehiculo);

    
    const nombreCliente = cliente?.nombre1 ?? 'N/A';
    const apellidoCliente = cliente?.apellido1 ?? 'N/A';
    const identificacion = cliente?.nIdentificacion ?? 'N/A';
    const placaVehiculo = vehiculo?.placa ?? 'N/A';
    const colorVehiculo = vehiculo?.color ?? 'N/A';
    const tipocarro = vehiculo?.tipovehiculo ?? 'N/A';
    const fechaInicio = this.alquiler.fechasoli ? new Date(this.alquiler.fechasoli).toLocaleDateString() : 'N/A';
    const fechaEntrega = this.alquiler.fechaentre ? new Date(this.alquiler.fechaentre).toLocaleDateString() : 'N/A';
    

    const alquilerData = [
      ['Número de Alquiler:', this.alquiler.numeroalquiler],
      ['Cliente:', `${nombreCliente} ${apellidoCliente}`],
      ['Identificación:', `${identificacion}`],
      ['Fecha de Inicio:', fechaInicio],
      ['Fecha de Entrega:', fechaEntrega],
      ['Placa:', placaVehiculo],
      ['Color:', colorVehiculo],
      ['Tipo:', tipocarro],
      ['Valor del Alquiler: $', this.alquiler.valoralquiler],
      ['Estado:', this.alquiler.estadoalqui]

    ];

    let y = 30;
    alquilerData.forEach(([label, value]) => {
      doc.setFontSize(12);
      doc.text(`${label} ${value}`, 14, y);
      y += 10;
    });

    doc.save('alquiler.pdf');
  }
  regresar() {
    this.router.navigate(["./usuarios"]);
  }
}
