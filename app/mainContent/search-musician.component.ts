import { Component} from '@angular/core';
import { Musician } from './musician';
import { MusicianService } from './musicianService'

@Component({
    moduleId: module.id,
    selector: 'search-musician',
    templateUrl: 'search-musician.component.html'
})
export class SearchMusicianComponent {
    musicians: Array<Musician>;

    constructor(private musicianService : MusicianService) {
        //subscribe to search route with params
    }

    submit(name : string) : void {
        this.search();
    }

    search() : void {
        this.musicianService
            .getMusicians()
            .subscribe((result : Array<Musician>) => this.renderMusicians(result));
    }
    
    renderMusicians(result: Array<Musician>) : void {
        this.musicians = null;
        if(result){
            this.musicians = result;
        }
    }
}