/* eslint-disable */
import { QMessageBox, ButtonRole, QPushButton } from '@nodegui/nodegui';

import { Constraint } from './constraint';
import { Suite } from './suite';
import { Color } from './color';
import { Card } from './card';

export function Deck() {
    this.d = [];

    let i = 1;
    let temp = new Array(58); temp.fill(0);
    for (; i <= 14; i++) {

        let c1 = new Card(i, Suite.Clubs, Color.black);

        let c2 = new Card(i, Suite.Diamonds, Color.red);
        let c3 = new Card(i, Suite.Hearts, Color.red);
        let c4 = new Card(i, Suite.Spades, Color.black);

        temp[i - 1] = c1;
        temp[i * 2 - 1] = c2;

        temp[i * 3 - 1] = c3;

        temp[i * 4 - 1] = c4;

    }

    temp[56] = new Card(0, Suite.None, Color.black);
    temp[57] = new Card(0, Suite.None, Color.red);



    this.d = temp.slice();


    this.Shuffle = function () {
        let i = this.d.length - 1;
        for (; i >= 0; i--) {

            let iRandom = Math.floor(Math.random() * (this.d.length - 1));


            const anon = function (key, value) {
                return value;
            };

            let temp = (JSON.stringify(this.d[i]));
            let temp2 = (JSON.stringify(this.d[iRandom]));
            this.d[iRandom] = { ...new Card(0, 4, 0), ...(JSON.parse(temp, anon)) };
            this.d[i] = { ...new Card(0, 4, 0), ...(JSON.parse(temp2, anon)) };



        };

    };
    this.GetCard = function () {
        return this.d.shift();
    };
    this.PushCard = function (c) {
        this.d.push(c);
    };
    this.PeekCard = function () {
        return this.d[0];
    };

};