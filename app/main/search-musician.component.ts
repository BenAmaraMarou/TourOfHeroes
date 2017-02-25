import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Musician } from './musician';
import { MusicianService } from './musicianService'

@Component({
    moduleId: module.id,
    selector: 'search-musician',
    templateUrl: 'search-musician.component.html'
})
export class SearchMusicianComponent extends OnInit {
    musicians: Array<Musician>;
    name: string;

    constructor(
        private router: Router, 
        private route: ActivatedRoute, 
        private musicianService : MusicianService,
        private searchInput: ElementRef) {
            super();
            this.route.queryParams.subscribe(params => { this.name = params['name'] });
    }
    
    ngOnInit(){
        Observable.fromEvent(this.searchInput.nativeElement, 'keyup')
            .map((e: any) => e.target.value)
            .debounceTime(250)
            .map((name: string) => this.submit(name));
    }

    submit(name : string) : void {
        this.router.navigate(['search'], {queryParams: {name : name}})
            .then(_=> this.search());
    }

    search() : void {
        this.musicianService
            .searchMusicians(name)
            .subscribe((result : any) => this.renderMusicians(result));
    }
    
    renderMusicians(result: any) : void {
        this.musicians = null;
        if(result){
            this.musicians = result;
        }
    }
}