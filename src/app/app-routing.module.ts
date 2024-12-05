import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { ComparaisonComponent } from './pages/comparaison/comparaison.component';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [

  { path: '',
    component: AppComponent, children:[
      { path: '', component: HomeComponent },
      { path: 'comparaison', component: ComparaisonComponent },
      { path: 'video', component: VideoComponent },

    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
