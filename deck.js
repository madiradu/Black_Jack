/* eslint-disable */


import { Dealer } from './dealer';
import { Player } from './player';
import { Card } from './card';
import { Constraint } from './constraint';

import { Suite }  from './suite';
import { Color } from './color';


export class Deck {
    d = new Array(0);
    constructor() {
        let i = 1;
        for (; i <= 14; i++) {
            const c1 = new Card(i, Suite.Clubs, Color.black);
            const c2 = new Card(i, Suite.Diamonds, Color.red);
            const c3 = new Card(i, Suite.Hearts, Color.red);
            const c4 = new Card(i, Suite.Spades, Color.black);
            this.d[this.d.length]=(c1);
            this.d[this.d.length]=(c2);
            this.d[this.d.length]=(c3);
            this.d[this.d.length]=(c4);
        }

        const c5 = new Card(0, Suite.None, Color.black);
        const c6 = new Card(0, Suite.None, Color.red);
        this.d[this.d.length]=(c5);
        this.d[this.d.length]=(c6);
    }
    Shuffle() {
        let i = 0;
        for (i = this.d.length - 1; i > 0; i--) {
            const min = 1;
            const max = 1000;
            let rand = Math.floor(Math.random() * (max - min + 1) + min)
            let iRandom = rand % i;
            const temp = this.d[i];
            this.d[i] = this.d[iRandom];
            this.d[iRandom] = temp;

        }
    };
    GetCard() {
        const cTemp = this.d[0];
        this.d.shift();
        return cTemp;
    };
    PushCard(c) {
        this.d[this.d.length]=(c);
    };
    PeekCard() {
        const cTemp = this.d[0];
        return cTemp;
    };
};