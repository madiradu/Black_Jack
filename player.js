import { Constraint } from './constraint';
import { Suite } from './suite';
import { Color } from './color';
import { Card } from './card';
import { Deck } from './deck';
import { Dealer } from './dealer';

export class Player {
    dl;
    isFirstPlayer;

    hand = new Array(0);
    constructor(h) {
        this.isFirstPlayer = false;
        let c = null;
        for (c of  h) {
            this.hand[this.hand.length] = c;
        }
    }


    getHand() {
        let aTemp = null;
        aTemp = (this.hand);
        return aTemp;
    }
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
            vct1[vct1.length] = i;
        }
        while (vct1.length) {
            let i = vct1[0];
            let k = 0; let j = null;
            for (j of this.hand) {
             
                if (typeof j == 'undefined' || j == null)
                    continue;
                if (i.getNo() == j.getNo() && i.getSuite() == j.getSuite()) {
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
                this.hand[this.hand.length] = c;
            }
        }
        else {
            let rs = new Constraint();
            let r = null; r = this.dl.GiveCardsPlayer2(cr, s, isWinning);
            let c = null;
            for (c of r) {
                this.hand[this.hand.length] = c;
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