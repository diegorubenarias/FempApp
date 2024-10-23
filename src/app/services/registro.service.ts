import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
 

  private apURL = environment.SERVER_API;
  private http = inject(HttpClient);

  guardar(nombre: string, edad: number, email: string, 
    password: string, nivel: string ){
    return this.http.post(`${this.apURL}/usuario`,{
      nombre,
      edad,
      password: password,
      usuario: email,
      nivel,
    });
  }
}
