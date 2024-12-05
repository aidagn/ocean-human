import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-section',
  standalone: true,
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css'],
  imports: [CommonModule]
})
export class CardSectionComponent {
  constructor(private router: Router) {

  }
  cards = [
    {
      image: 'assets/images/skull.jpg',
      title: 'Comparaison entre l\'anatomie humaine et marine',
      description: 'Découvrez les similitudes fascinantes entre l\'anatomie humaine et celle des espèces marines.',
      route: '/comparaison'
    },
    {
      image: 'assets/images/skull.jpg',
      title: 'Adaptations uniques de la vie marine',
      description: 'Explorez les adaptations exceptionnelles des organismes marins pour survivre dans leur environnement.',
      route: '/comparaison'},
    {
      image: 'assets/images/skull.jpg',
      title: 'Expériences d\'apprentissage interactives',
      description: 'Engagez-vous avec un contenu interactif pour en apprendre davantage sur l\'anatomie humaine et la vie marine.',
      route: '/comparaison'
    }
  ];

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
