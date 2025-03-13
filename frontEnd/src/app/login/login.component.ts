import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../servicio/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private login:LoginService) { 
    this.loginForm = this.fb.group({
      nIdentificacion: ['', [Validators.required]],
      claveUs: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  validarLogin() {
    if (this.loginForm.invalid) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const { nIdentificacion, claveUs } = this.loginForm.value;

    this.login.login(nIdentificacion, claveUs).subscribe(
      dato => {
        console.log(dato);
        if (dato === true) {
          this.router.navigate(['/usuarios']);
        } else {
          alert('Usuario o contraseña incorrecta');
        }
      },
      error => {
        console.error('Error en la solicitud:', error);
        alert('Ocurrió un error al intentar iniciar sesión.');
      }
    );
  }
}

