import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
 

  private apURL = environment.SERVER_API;
  private http = inject(HttpClient);

  guardar(nombre: string, edad: number, nivel: string, email: string, 
    password: string ){
    return this.http.post(`${this.apURL}/register`,{
      nombre,
      edad,
      nivel,
      password: password,
      email: email,
    });
  }

  guardarFast(email: string, password: string, dni: string ){
    return this.http.post(`${this.apURL}/register`,{
      email: email,
      password: password,
      dni: dni
    });
  }

  buscar(dni: string) {
    return this.http.get(`${this.apURL}/padron/${dni}`);
  }
}
