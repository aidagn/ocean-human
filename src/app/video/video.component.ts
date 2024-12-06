import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video',
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  videos = [
    { video: 'assets/videos/FlorianSevellec004.webm' },
    { video: 'assets/videos/FlorianSevellecOonaLayolle001.webm' },
    { video: 'assets/videos/FredericLeMoignePart1.webm' },
    { video: 'assets/videos/FredericLeMoignePart2.webm' }
  ];
}
