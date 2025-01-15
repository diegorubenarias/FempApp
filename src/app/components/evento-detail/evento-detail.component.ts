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
    this.eventServ.getEventoById(id)
    .subscribe(this.evento => {
      if (Array.isArray(evento)) {
        this.dataSource.data = this.evento;
        this.dataSource.filter = this.filterValue;
      } else {
        console.error('Los datos recibidos no son un arreglo de Deportist');
      }
    });
  }

}
