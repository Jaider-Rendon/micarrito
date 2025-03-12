import { Registro } from './../entidad/registro';
import { RegistroService } from './../servicio/registro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule], 
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup; 
  Usuario:Registro=new Registro


  ngOnInit():void {
  }
  constructor(private registroService:RegistroService) {}

  guardarRegistro(){
    this.registroService.registroempleado(this.Usuario).subscribe(dato => {
      console.log(dato);
      if (dato != null) {
        alert("Empleado Registrado");
        window.location.reload();
      } else {
        alert("Registro no guardado");
      }
    });
  }
}