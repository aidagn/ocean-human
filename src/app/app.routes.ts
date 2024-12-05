import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';

export const routes: Routes = [
    { path: '', component: AppComponent},
    {path:'video', component: VideoComponent}
];
