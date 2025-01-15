import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Deportist } from '../interfaces/deportist';
import { catchError, map, tap } from "rxjs/operators";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeportistService {

  private apURL = environment.SERVER_API;
  private http = inject(HttpClient);

  mostrarDeportist() {
    return this.http.get(`${this.apURL}/padron`);
  }
  
  /*getDeportist() {
    return this.http.get<Deportist[]>(`${this.apURL}/padron`)
    .pipe(
      map((res) =>{
        return res;}
    ));
  }*/

    getDeportistas(): Observable<Deportist[]> {
      return this.http.get<Deportist[]>(`${this.apURL}/padron`)
        .pipe(
          tap(data => {
            console.log('Datos recibidos:', data);
          }),
          catchError(error => {
            console.error('Error al obtener deportistas:', error);
            return of([]);
          })
        );
    }
    

  buscarDni(dni: string) {
    return this.http.get(`${this.apURL}/padron/${dni}`);
  }
}
