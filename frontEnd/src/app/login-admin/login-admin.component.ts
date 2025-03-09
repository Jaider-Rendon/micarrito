import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {

loginAdminForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginAdminForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginAdminForm.valid) {
      console.log('Formulario enviado:', this.loginAdminForm.value);
      alert('Inicio de sesión exitoso');
    }
  }


}
