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

    ngOnInit(): void {
        this.topMusicians = this.musicianService.getTopMusicians(this.top).map(m=>m);
    }
}