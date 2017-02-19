import { Component} from '@angular/core';
import { Musician } from './musician';

@Component({
    moduleId: module.id,
    selector: 'top-musicians',
    templateUrl: 'top-musicians.component.html'
})
export class TopMusiciansComponent {
    title: string;
    topMusicians: Array<Musician>;

    constructor() {
        this.title = "Top Musicians";
        this.topMusicians = this.getTopMusicians(3);
    }

    getTopMusicians(top : number): Array<Musician>{
        return [new Musician(1, "Mozart"), new Musician(2, "Beethoven"), new Musician(3, "Shrubert") ];
    }
}