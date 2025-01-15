import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Evento } from '../interfaces/evento';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  
  private apURL = environment.SERVER_API;
  private http = inject(HttpClient);

  getEventos(): Observable<Evento[]> {
     return this.http.get<Evento[]>(`${this.apURL}/evento`)
            .pipe(
              tap(data => {
                console.log('Datos recibidos:', data);
              }),
              catchError(error => {
                console.error('Error al obtener eventos:', error);
                return of([]);
              })
            );
  }

  getEventoById(id: number):Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.apURL}/evento/id`)
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

}

