import { Dealer } from './dealer';
import { Card } from './card';
import { Constraint } from './constraint';
import { Deck } from './deck';

export class Player {
    constructor(h) {
        this.isFirstPlayer = false;
        let c = null;
        for (c in h) {
            this.hand[this.hand.length] = c;
        }
    }
    dl;
    isFirstPlayer;

    hand = new Array(0);

    getHand() {
        return this.hand;
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
        for (i in cr) {
            vct1[vct1.length] = i;
        }
        while (vct1.length) {
            let i = vct1[0];
            let k = 0; let j = null;
            for (j in this.hand) {
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
            for (c in r) {
                this.hand[this.hand.length] = c;
            }
        }
        else {
            let rs = new Constraint();
            let r = null; r = this.dl.GiveCardsPlayer2(cr, s, isWinning);
            let c = null;
            for (c in r) {
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