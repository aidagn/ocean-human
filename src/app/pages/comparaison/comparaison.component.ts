import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comparaison',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comparaison.component.html',
  styleUrls: ['./comparaison.component.css']
})
export class ComparaisonComponent {
  pixelInfo = [
    { x: 420, y: 310, label: 'Cœur humain', equivalent: 'Courants océaniques', description: 'Le cœur pompe le sang dans tout le corps, comme les courants océaniques font circuler l’eau à travers le globe, distribuant chaleur, énergie et nutriments.' },
    { x: 550, y: 350, label: 'Poumons', equivalent: 'Coraux', description: 'Les poumons permettent l’échange d’oxygène et de dioxyde de carbone, tout comme les récifs coralliens, qui agissent comme les "poumons de l’océan", produisant et abritant de nombreuses formes de vie.' },
    { x: 500, y: 450, label: 'Peau', equivalent: 'Surface de l’eau', description: 'La peau protège le corps et régule la température, tout comme la surface de l’océan agit comme une barrière entre l’atmosphère et les profondeurs.' },
    { x: 200, y: 400, label: 'Système sanguin', equivalent: 'Rivières sous-marines', description: 'Les veines et les artères transportent des fluides vitaux, tout comme les rivières sous-marines transportent des nutriments dans l’océan.' },
    { x: 300, y: 200, label: 'Yeux', equivalent: 'Lacs et abysses clairs', description: 'Les yeux reflètent la lumière et permettent de voir, comme les zones abyssales claires qui révèlent la lumière à travers les profondeurs.' },
    { x: 150, y: 100, label: 'Cheveux', equivalent: 'Algues marines', description: 'Les cheveux flottent au vent ou dans l’eau, tout comme les algues marines ondulent sous l’effet des courants océaniques.' },
    { x: 550, y: 500, label: 'Estomac', equivalent: 'Fosses océaniques', description: 'L’estomac digère et transforme les nutriments, tout comme les fosses océaniques transforment les dépôts organiques.' },
    { x: 400, y: 550, label: 'Os', equivalent: 'Récifs rocheux', description: 'Les os fournissent structure et soutien, comme les récifs rocheux offrent une base solide pour la vie marine.' },
    { x: 600, y: 250, label: 'Système nerveux', equivalent: 'Réseaux biologiques océaniques', description: 'Les nerfs transmettent des signaux électriques, similaires aux réseaux biologiques sous-marins.' },
    { x: 300, y: 350, label: 'Sang', equivalent: 'Eau de mer', description: 'Le sang est un fluide riche en minéraux, tout comme l’eau de mer est une solution saline qui soutient la vie.' },
    { x: 500, y: 100, label: 'Cerveau', equivalent: 'Écosystème entier', description: 'Le cerveau contrôle les fonctions du corps, tout comme l’écosystème océanique régule les cycles de vie.' },
    { x: 450, y: 650, label: 'Main', equivalent: 'Pinces ou tentacules', description: 'Les mains saisissent et manipulent, comme les tentacules des céphalopodes.' },
    { x: 400, y: 700, label: 'Pieds', equivalent: 'Fonds marins', description: 'Les pieds ancrent le corps, comme les fonds marins constituent la base où vivent des espèces benthiques.' },
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
    this.tooltip.x = event.pageX;
    this.tooltip.y = event.pageY-10;
    this.tooltip.label = point.label;
    this.tooltip.equivalent = point.equivalent;
  }

  hideTooltip() {
    this.tooltip.visible = false;
  }
}
