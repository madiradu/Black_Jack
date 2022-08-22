import { Constraint } from './constraint';
import { Suite } from './suite';
import { Color } from './color';
import { Deck } from './deck';
import { Dealer } from './dealer';

import { Card } from './card';

export class Player {

    Dealer = null;
    isFirstPlayer;

    hand = new Array(0);

    constructor(h) {
        this.isFirstPlayer = false;
        let c = null;
        for (c of  h) {
            this.hand.push(c);
        }
    };

    getHand() {
        return this.hand;
    };
    StartGame() {
        this.isFirstPlayer = true;

    };
    CheckPlayerIsWinning() {
        if (!this.hand.length) {
            return true;
        }
        return false;
    };
    //Player(h);
    CheckStack() {
        return this.dl.CheckStack();
    };//CheckStack should be called before GiveCards to figure out which Cards should be given up
    GiveCards(cr, s) {

        let isWinning = false;
        if (cr.length == this.hand.length) {
            isWinning = true;
        }
        let vct1 = new Array(0);
        let i = null;
        for (i of cr) {
            vct1.push(i);
        }
        while (vct1.length) {
            let i = vct1[0];
            let k = 0; let j = null;
            for (j of this.hand) {
             
                if (typeof j == 'undefined' || j == null)
                    continue;
                if (i.fno() == j.fno() && i.fs() == j.fs()) {
                    this.hand.splice(k, k + 1);
                    vct1.shift();
                    break;
                }
                k++;
            }
        }
        if (this.isFirstPlayer) {
            let rs = new Constraint();
            let r = null; r = this.dl.GiveCardsPlayer1(cr, s, isWinning);
            let c = null;
            for (c of r) {
                this.hand.push(c);
            }
        }
        else {
            let rs = new Constraint();
            let r = null; r = this.dl.GiveCardsPlayer2(cr, s, isWinning);
            let c = null;
            for (c of r) {
                this.hand.push(c);
            }
        }
    };//CheckStack should be called before GiveCards to figure out which Cards should be given up
    SetDealer(d) {
        this.dl = d;
    };
    GetDealer() {
        return this.dl;
    };
};