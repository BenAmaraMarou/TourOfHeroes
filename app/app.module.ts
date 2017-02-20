import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }  from './app-routing.module';

import { AppComponent }  from './app.component';
import { NavigationComponent }  from './navigation/navigation.component';
import { DashboardComponent }  from './mainContent/dashboard.component';
import { TopMusiciansComponent }  from './mainContent/top-musicians.component';
import { SearchMusicianComponent }  from './mainContent/search-musician.component';
import { MusiciansComponent } from './mainContent/musicians.component' 
import { MusicianService } from './mainContent/musicianService';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, NavigationComponent, DashboardComponent, SearchMusicianComponent, TopMusiciansComponent, MusiciansComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [{ provide: MusicianService, useClass: MusicianService }]
})
export class AppModule { }