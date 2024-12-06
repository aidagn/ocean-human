import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import du module de routage
import { AppComponent } from './app.component';
import { ComparaisonComponent } from './pages/comparaison/comparaison.component';
import { VideoComponent } from './video/video.component';
import { AdaptationsComponent} from './pages/adaptations/adaptations.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    ComparaisonComponent,
    VideoComponent,
    AdaptationsComponent,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
