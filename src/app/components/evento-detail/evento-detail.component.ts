import { Component, inject, OnInit } from '@angular/core';
import { Evento } from '../../interfaces/evento';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { EventosService } from '../../services/eventos.service';
import { MatCard, MatCardActions } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-evento-detail',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatTableModule, 
    MatButtonModule, 
    MatIconModule,
    MatInputModule,
    RouterLink, 
    RouterOutlet
    
  ],
  templateUrl: './evento-detail.component.html',
  styleUrl: './evento-detail.component.scss'
})
export class EventoDetailComponent implements OnInit {
  
  public evento!: Evento;
  private router = inject(Router);
  private eventServ = inject(EventosService);

  constructor() { }

  ngOnInit(): void {
    this.mostrarEventoById(1);
  }
  
  

  mostrarEventoById(id: number){
    this.eventServ.getEventoById(id).subscribe({
      next: (evento: any) => {
      this.evento = evento[0];
      console.log(this.evento);
      },
      error: (error: any) => {
      console.error('Error fetching event:', error);
      }
    });
  }

  

}
