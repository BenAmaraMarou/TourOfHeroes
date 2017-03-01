import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Musician } from './musician';

@Injectable()
export class MusicianService
{
    allMusicians: Array<Musician>;

    constructor() {
        this.allMusicians = [
            new Musician(1, "Mozart", 10), 
            new Musician(2, "Beethoven", 9), 
            new Musician(3, "Tchaikovsky", 8),
            new Musician(4, "Chopin", 7),            
            new Musician(5, "Shrubert", 6), 
            new Musician(6, "Bach", 5), 
            new Musician(7, "Liszt", 4),
            new Musician(6, "Haydn", 3)];
    }

    getMusicians(): Observable<Musician>{
        return Observable.from(this.allMusicians);
    }

    getTopMusicians(top : number): Observable<Musician[]>{
        return Observable.of(this.allMusicians.sort(s=>s.rating).reverse().slice(0, top));
    }

    // searchMusicians(name : string): Observable<Musician>{
    //     return Observable
    //             .from(this.allMusicians)
    //             .filter(m => m.name == name);
    // }
}