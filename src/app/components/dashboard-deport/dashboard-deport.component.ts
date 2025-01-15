import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DeportistComponent } from '../deportist/deportist.component';

@Component({
  selector: 'app-dashboard-deport',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    DeportistComponent
  ],
  templateUrl: './dashboard-deport.component.html',
  styleUrl: './dashboard-deport.component.scss'
})
export class DashboardDeportComponent {

  private router = inject(Router);
  
}
