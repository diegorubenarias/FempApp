import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
 

  private apURL = environment.SERVER_API;
  private http = inject(HttpClient);

  
  buscar(dni: string) {
    return this.http.get(`${this.apURL}/padron/${dni}`);
  }

  guardar(nombre: string, edad: number, nivel: string, email: string, 
    password: string,  documentoN: string ){
    return this.http.post(`${this.apURL}/register`,{
      nombre,
      edad,
      nivel,
      email: email,
      password: password,
      dni: documentoN
    });
  }

}
