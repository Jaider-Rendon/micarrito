import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginAdminService } from '../servicio/login-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent implements OnInit{
  loginForm: FormGroup;

loginAdminForm: FormGroup;

  constructor (private fb: FormBuilder,
    private loginAdminSer: LoginAdminService,
    private router: Router
) {
  this.loginForm = this.fb.group({
    usuario: ['', [Validators.required]],
    clavead: ['', [Validators.required]]
  });
}
  ngOnInit(): void {
  }

  validarLoginAd() {
    if (this.loginForm.invalid) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const { usuario, clavead } = this.loginForm.value;
    this.loginAdminSer.login(usuario, clavead).subscribe(dato => {
      console.log(dato);
      if (dato === true) {
        alert('Datos correctos');
        this.router.navigate(['/admins']);
      }else {
        alert("Datos incorrectos");
      }
    });

    
  }



}
