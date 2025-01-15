import { Component, inject, OnInit } from '@angular/core';
import { Evento } from '../../interfaces/evento';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-evento-detail',
  standalone: true,
  imports: [],
  templateUrl: './evento-detail.component.html',
  styleUrl: './evento-detail.component.scss'
})
export class EventoDetailComponent implements OnInit {
  
  public evento!: Evento;
  private router = inject(Router);
  private eventServ = inject(EventosService);

  constructor() { }

  ngOnInit(): void {}
  
  

  mostrarEventoById(id: number){
    this.eventServ.getEventoById(id).subscribe({
      next: (evento: Evento) => {
      this.evento = evento;
      console.log(this.evento);
      },
      error: (error: any) => {
      console.error('Error fetching event:', error);
      }
    });
  }

  

}
