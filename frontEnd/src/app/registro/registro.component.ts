import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup; 

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registroForm = this.fb.group({
      identificacion: [''],
      nombre1: [''],
      nombre2: [''],
      apellido1: [''],
      apellido2:[''],
      fechaExpedicion:[''],
      telefono: [''],  
      vigencialicencia: [''],
      categoria:[''],
      correo:[''],
      claveUsuario:[''] 
    });
  }

  onSubmit() {
    console.log(this.registroForm.value);
  }
}