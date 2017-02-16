import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavigationComponent }  from './Navigation/navigation.component';
import { NavigationItemComponent }  from './Navigation/navigationItem.component';
import { MainContentComponent }  from './MainContent/mainContent.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NavigationComponent, NavigationItemComponent, MainContentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
