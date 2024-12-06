import { Component } from '@angular/core';
import {NavbarComponent} from '../../navbar/navbar.component';
import {CardSectionComponent} from '../../card-section/card-section.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    NavbarComponent,
    CardSectionComponent
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
