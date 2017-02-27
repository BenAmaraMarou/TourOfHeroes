import { Component, OnInit } from '@angular/core';

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
    topMusicians: Array<Musician>;

    constructor(private musicianService : MusicianService) {
        this.title = "Top Musicians";
        this.top = 3;
    }

    ngOnInit() {
        console.log('onInit');
        this.musicianService
            .getTopMusicians(this.top)
            .subscribe((result : any) => {
                console.log('inside', result);

                this.renderTopMusicians(result)});
    }

    renderTopMusicians(result: any) : void{
        console.log('renderTopMusicians' + result );
        this.topMusicians = null;
        if(result){
            this.topMusicians = result;
        }
    }
}