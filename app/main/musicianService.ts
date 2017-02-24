import { Injectable } from '@angular/core';

import { Musician } from './musician';

@Injectable()
export class MusicianService
{
    getMusicians(): Array<Musician>{
        return [
            new Musician(1, "Mozart"), 
            new Musician(2, "Beethoven"), 
            new Musician(3, "Shrubert"), 
            new Musician(4, "Bach"), 
            new Musician(5, "Chopin") ];
    } 

    getTopMusicians(top : number): Array<Musician>{
        return [
            new Musician(1, "Mozart"), 
            new Musician(2, "Beethoven"), 
            new Musician(3, "Shrubert") ];
    }    
}