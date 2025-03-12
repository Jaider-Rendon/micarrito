import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/login/usuario';

  constructor(private httpClient: HttpClient) { }

  login(usuario: number, claveUs: number): Observable<any> {
    return this.httpClient.get(
      `${this.baseUrl}/login?nIdentificacion1=${encodeURIComponent(usuario)}&claveUs1=${encodeURIComponent(claveUs)}`
    );
  }
}
