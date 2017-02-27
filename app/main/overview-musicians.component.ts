import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs';

import { Musician } from './musician';
import { MusicianService } from './musicianService'

@Component({
    moduleId: module.id,
    selector: 'overview-musicians',
    templateUrl: 'overview-musicians.component.html'
})
export class OverviewMusiciansComponent extends OnInit {
    allMusicians: Array<Musician>;

    constructor(private musicianService: MusicianService, private router: Router) {
        super();
    }

    ngOnInit(){
        this.searchMusicians();
    }

    search(name : string) : void {
        this.router.navigate(['search'], {queryParams: {name : name}});
    }

    searchMusicians() : void {
        // Observable.from(
        //     this.musicianService
        //     .getMusicians()
        //     .map(response => response))
        //     .subscribe((result : any) => this.renderMusicians(result));
    }
    
    renderMusicians(result: any) : void {
        this.allMusicians = null;
        if(result){
            this.allMusicians = result;
        }
    }
}