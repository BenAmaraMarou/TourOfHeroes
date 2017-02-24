import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Musician } from './musician';
import { MusicianService } from './musicianService'
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'search-musician',
    templateUrl: 'search-musician.component.html'
})
export class SearchMusicianComponent {
    musicians: Array<Musician>;

    constructor(
        private router: Router, 
        private route: ActivatedRoute, 
        private musicianService : MusicianService) {
        //this.route.queryParams.subscribe(params => { this.});        //subscribe to search route with params
    }

    submit(name : string) : void {
        this.search();
    }

    search() : void {
        Observable.from(
            this.musicianService
            .getMusicians()
            .map(response => response))
            .subscribe((result : any) => this.renderMusicians(result));
    }
    
    renderMusicians(result: any) : void {
        this.musicians = null;
        if(result){
            this.musicians = result;
        }
    }
}