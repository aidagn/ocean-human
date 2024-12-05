import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {CardSectionComponent} from './card-section/card-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CardSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ocean-human-interface';
}
