import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent }   from "./main/dashboard.component";
import { MusiciansComponent }   from "./main/musicians.component";
import { APP_BASE_HREF }        from '@angular/common';

const routes : Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'musicians', component: MusiciansComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
    ]
})
export class AppRoutingModule{
}