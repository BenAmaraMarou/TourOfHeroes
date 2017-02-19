import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent }   from "./mainContent/dashboard.component";
import { MusiciansComponent }   from "./mainContent/musicians.component";
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