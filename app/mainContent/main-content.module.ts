import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent }  from './dashboard.component';
import { TopMusiciansComponent }  from './top-musicians.component';
import { SearchMusicianComponent }  from './search-musician.component';
import { SummaryMusiciansComponent }  from './summary-musicians.component';
import { MusiciansComponent } from './musicians.component' 

@NgModule({
  imports:      [ BrowserModule,  ],
  declarations: [ DashboardComponent, SearchMusicianComponent, TopMusiciansComponent, SummaryMusiciansComponent, MusiciansComponent ],
  exports:      [ DashboardComponent, MusiciansComponent ],
  bootstrap:    [ DashboardComponent ]
})
export class MainContentModule { }