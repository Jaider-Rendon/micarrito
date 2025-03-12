import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registro } from '../entidad/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private bdURLG = "http://localhost:8080/ver/usuarios/guardarr";

  constructor(private HttpClient:HttpClient) { }

  registroempleado(usuario:Registro):Observable<Object>{
    return this.HttpClient.post(`${this.bdURLG}`,usuario);
  }
}
