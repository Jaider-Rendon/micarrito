import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavegacionComponent } from '../navegacion/navegacion.component';



@Component({
  selector: 'app-login',
  standalone: true,  
  imports: [CommonModule, ReactiveFormsModule,NavegacionComponent], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {
    this.loginForm = this.fb.group({
      identificacion: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario enviado:', this.loginForm.value);
      alert('Inicio de sesión exitoso');
    }
  }

  admi(){
    this.router.navigate(['./loginAdmin'])
  }
}

