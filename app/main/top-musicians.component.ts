import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Musician } from './musician';
import { MusicianService } from './musicianService'

@Component({
    moduleId: module.id,
    selector: 'top-musicians',
    templateUrl: 'top-musicians.component.html'
})
export class TopMusiciansComponent implements OnInit {
    title: string;
    top: number;
    topMusicians: Observable<Musician[]>;

    constructor(private musicianService : MusicianService) {
        this.title = "Top Musicians";
        this.top = 3;
    }

    ngOnInit() {
        this.musicianService
            .getTopMusicians(this.top)
            .subscribe((result : any) => {
                this.renderTopMusicians(result)});
    }

    renderTopMusicians(result: any) : void{
        this.topMusicians = null;
        if(result){
            this.topMusicians = result;
        }
    }
}