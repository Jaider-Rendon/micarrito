import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../servicio/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,  
  imports: [CommonModule, ReactiveFormsModule, FormsModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginUsuarioServi: LoginService,
    private router: Router
  ) {
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

    this.loginUsuarioServi.login(nIdentificacion, claveUs).subscribe(dato => {
      console.log(dato);
      if (dato === true) {
        this.router.navigate(['/usuarios']);
      } else {
        alert('Usuario o contraseña incorrecta');
      }
    });


  }
  abrirAdmin(){
    
    this.router.navigate(['./loginAdmin'])

  }



}
