import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alquiler } from '../entidad/alquiler';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  private apiUrl = 'http://localhost:8080/ver/alquiler';

  constructor(private http: HttpClient) {}

  solicitarAlquiler(datos: any): Observable<Alquiler> {
    return this.http.post<Alquiler>(`${this.apiUrl}/solicitar`, null, {
      params: {
        nIdentificacion: datos.nIdentificacion, 
        placa: datos.placa,
        fechaInicio: datos.fechaInicio,
        fechaEntrega: datos.fechaEntrega
      }
    });
  }
}
