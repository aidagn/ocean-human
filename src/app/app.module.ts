import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import du module de routage
import { AppComponent } from './app.component';
import { ComparaisonComponent } from './pages/comparaison/comparaison.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    ComparaisonComponent,
    VideoComponent,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
