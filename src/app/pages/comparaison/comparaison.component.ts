import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from '../../navbar/navbar.component';

@Component({
  selector: 'app-comparaison',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './comparaison.component.html',
  styleUrls: ['./comparaison.component.css']
})
export class ComparaisonComponent {
  pixelInfo = [
    { x: 470, y: 445, label: 'Cœur humain', equivalent: 'Courants océaniques. Le cœur pompe le sang dans tout le corps, comme les courants océaniques font circuler l’eau à travers le globe, distribuant chaleur, énergie et nutriments.', description: 'Le cœur pompe le sang dans tout le corps, comme les courants océaniques font circuler l’eau à travers le globe, distribuant chaleur, énergie et nutriments.' },
    { x: 550, y: 338, label: 'Poumons', equivalent: 'Coraux. Les poumons permettent l’échange d’oxygène et de dioxyde de carbone, tout comme les récifs coralliens, qui agissent comme les "poumons de l’océan", produisant et abritant de nombreuses formes de vie.', description: 'Les poumons permettent l’échange d’oxygène et de dioxyde de carbone, tout comme les récifs coralliens, qui agissent comme les "poumons de l’océan", produisant et abritant de nombreuses formes de vie.' },
    { x: 690, y: 300, label: 'Peau', equivalent: 'Surface de l’eau. La peau protège le corps et régule la température, tout comme la surface de l’océan agit comme une barrière entre l’atmosphère et les profondeurs.', description: 'La peau protège le corps et régule la température, tout comme la surface de l’océan agit comme une barrière entre l’atmosphère et les profondeurs.' },
    { x: 680, y: 600, label: 'Système sanguin', equivalent: 'Rivières sous-marines. Les veines et les artères transportent des fluides vitaux, tout comme les rivières sous-marines transportent des nutriments dans l’océan.', description: 'Les veines et les artères transportent des fluides vitaux, tout comme les rivières sous-marines transportent des nutriments dans l’océan.' },
    { x: 465, y: 80, label: 'Yeux', equivalent: 'Lacs et abysses clairs. Les yeux reflètent la lumière et permettent de voir, comme les zones abyssales claires qui révèlent la lumière à travers les profondeurs.', description: 'Les yeux reflètent la lumière et permettent de voir, comme les zones abyssales claires qui révèlent la lumière à travers les profondeurs.' },
    { x: 410, y: 100, label: 'Cheveux', equivalent: 'Algues marines. Les cheveux flottent au vent ou dans l’eau, tout comme les algues marines ondulent sous l’effet des courants océaniques.', description: 'Les cheveux flottent au vent ou dans l’eau, tout comme les algues marines ondulent sous l’effet des courants océaniques.' },
    { x: 570, y: 520, label: 'Estomac', equivalent: 'Fosses océaniques. L’estomac digère et transforme les nutriments, tout comme les fosses océaniques transforment les dépôts organiques.', description: 'L’estomac digère et transforme les nutriments, tout comme les fosses océaniques transforment les dépôts organiques.' },
    { x: 495, y: 338, label: 'Os', equivalent: 'Récifs rocheux. Les os fournissent structure et soutien, comme les récifs rocheux offrent une base solide pour la vie marine.', description: 'Les os fournissent structure et soutien, comme les récifs rocheux offrent une base solide pour la vie marine.' },
    { x: 715, y: 600, label: 'Système nerveux', equivalent: 'Réseaux biologiques océaniques. Les nerfs transmettent des signaux électriques, similaires aux réseaux biologiques sous-marins.', description: 'Les nerfs transmettent des signaux électriques, similaires aux réseaux biologiques sous-marins.' },
    { x: 680, y: 580, label: 'Sang', equivalent: 'Eau de mer. Le sang est un fluide riche en minéraux, tout comme l’eau de mer est une solution saline qui soutient la vie.', description: 'Le sang est un fluide riche en minéraux, tout comme l’eau de mer est une solution saline qui soutient la vie.' },
    { x: 500, y: 30, label: 'Cerveau', equivalent: 'Écosystème entier. Le cerveau contrôle les fonctions du corps, tout comme l’écosystème océanique régule les cycles de vie', description: 'Le cerveau contrôle les fonctions du corps, tout comme l’écosystème océanique régule les cycles de vie.' },
    { x: 780, y: 770, label: 'Main', equivalent: 'Pinces ou tentacules. Les mains saisissent et manipulent, comme les tentacules des céphalopodes.', description: 'Les mains saisissent et manipulent, comme les tentacules des céphalopodes.' },
    { x: 400, y: 700, label: 'Pieds', equivalent: 'Fonds marins. Les pieds ancrent le corps, comme les fonds marins constituent la base où vivent des espèces benthiques.', description: 'Les pieds ancrent le corps, comme les fonds marins constituent la base où vivent des espèces benthiques.' },
  ];

  tooltip = {
    visible: false,
    x: 0,
    y: 0,
    label: '',
    equivalent: '',
  };

  showTooltip(event: MouseEvent, point: any) {
    this.tooltip.visible = true;
    this.tooltip.x = point.x+15;
    this.tooltip.y = point.y+15;
    this.tooltip.label = point.label;
    this.tooltip.equivalent = point.equivalent;
  }

  hideTooltip() {
    this.tooltip.visible = false;
  }
}
