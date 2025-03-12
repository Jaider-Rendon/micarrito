import { Usuario } from './../entidad/usuario';
import { Registro } from './../entidad/registro';
import { RegistroService } from './../servicio/registro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule], 
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup; 
  suario:Registro=new Registro
  Usuario:Usuario=new Usuario


  ngOnInit():void {
  }
  constructor(private registroService:RegistroService,private router:Router) {}

  guardarRegistro(){
    this.registroService.registroempleado(this.Usuario).subscribe(dato => {
      console.log(dato);
      if (dato != null) {
        alert("Empleado Registrado");
        this.router.navigate(['/login'])
      } else {
        alert("Registro no guardado");
      }
    } ,error => {
      alert("error faltan datos");});
  }
}