import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculos } from '../entidad/vehiculos';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private bdurl = "http://localhost:8080/ver/vehiculo/buscartipodisponible";

  constructor(private httpClient: HttpClient) { }
  
  disponibles(tipo: string): Observable<Vehiculos[]> {
    const params = new HttpParams().set('tipo', tipo);

    return this.httpClient.get<Vehiculos[]>(`${this.bdurl}`, { params });
  }
}
