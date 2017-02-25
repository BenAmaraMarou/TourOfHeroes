import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { APP_BASE_HREF }        from '@angular/common';

import { DashboardComponent }       from "./main/dashboard.component";
import { SearchMusicianComponent }  from "./main/search-musician.component";
import { MyMusiciansComponent }     from "./main/mymusicians.component";

const routes : Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'search/:name', component: SearchMusicianComponent },
    { path: 'mymusicians', component: MyMusiciansComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
    ]
})
export class AppRoutingModule {
}