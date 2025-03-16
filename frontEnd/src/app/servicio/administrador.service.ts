import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alquiler } from '../entidad/alquiler';


@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  private bdurl = "http://localhost:8080/ver/alquiler/noentregado";
  private bdurll = "http://localhost:8080/ver/alquiler/todos";
  private bdurlll = "http://localhost:8080/ver/alquiler/cancelarAlqui";

  constructor(private httpClient: HttpClient) { }

  obtenernoentregados(): Observable<Alquiler[]> {
    return this.httpClient.get<Alquiler[]>(this.bdurl);
  }
  cancelar(id:number):Observable<any>{
    return this.httpClient.get(`http://localhost:8080/ver/alquiler/cancelarAlqui?numeroalquiler=${id}`);
  }

  gestionar(
    placa:string
  ):Observable<any>{
  return this.httpClient.get(`http://localhost:8080/ver/alquiler/actualizar?placa=${placa}`)
  }

  calcular(
    id:number
  ):Observable<any>{
return this.httpClient.get(`http://localhost:8080/ver/alquiler/gestionaralquiler?id=${id}`)
  }

  obtenerTodos(): Observable<Alquiler[]> {
      return this.httpClient.get<Alquiler[]>(this.bdurll);
    }

    buscar(cedula: number): Observable<Alquiler[]> {
      return this.httpClient.get<Alquiler[]>(`http://localhost:8080/ver/alquiler/buscaralqui?cedula=${cedula}`);
    }
    

}

