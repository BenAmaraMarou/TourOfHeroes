import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }  from './app-routing.module';

import { AppComponent }  from './app.component';
import { NavigationComponent }  from './navigation/navigation.component';
import { DashboardComponent }  from './main/dashboard.component';
import { TopMusiciansComponent }  from './main/top-musicians.component';
import { SearchMusicianComponent }  from './main/search-musician.component';
import { MyMusiciansComponent } from './main/mymusicians.component' 
import { MusicianService } from './main/musicianService';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule],
  declarations: [ AppComponent, NavigationComponent, DashboardComponent, SearchMusicianComponent, TopMusiciansComponent, MyMusiciansComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [{ provide: MusicianService, useClass: MusicianService }]
})
export class AppModule { }