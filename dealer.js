/* eslint-disable */


import { Constraint } from './constraint';
import { Suite } from './suite';
import { Color } from './color';
import { Card } from './card';
import { Deck } from './deck';
import { Player } from './player';


export class Dealer {
    d= new Deck();
    vect = new Array(0);
    waitATurn;
    player1Turn;
    Player1LastCards;
    Player2LastCards;
    GiveCards(cr, s, isPlayer1, isWinning) {
        let c = new Array(0);
        let r = null; r = this.CheckStack();
        let fault = false;



        //here should go validations those cards belong to user
        //if(!Validations(cr, isPlayer1))
        //	{
        //	fault = true;
        //	}
        if (isPlayer1 != this.player1Turn) {
            fault = true;
        }
        if (r.waitATurn) {
            this.waitATurn = false;
            if (cr.length != 0 || fault) {
                fault = true;
            }
            else {
                return c;
            }
        }
        if (s == "Last" || s == "Knock") {
            if (isPlayer1) {
                this.Player1LastCards = true;
            }
            else {
                this.Player2LastCards = true;
            }
        }
        if (cr.length == 0) {
            c[c.length] = this.d.GetCard();
            return c;
        }
        if (cr[0].getSuite() != r.suite && cr[0].getNo() != r.rank) {
            fault = true;
        }
        if (!fault) {
            let i = 1;
            for (; i < cr.length; i++) {
                if (cr[i].getSuite() != r.suite || cr[i].getNo() != (r.rank + i)) {
                    fault = true;
                    break;
                }
            }
        }
        if (fault) {
            let i = null;
            for (i in cr) {
                c[c.length] = i;
            }
            c[c.length] = (this.d.GetCard());
            c[c.length] = (this.d.GetCard());
        }
        return c;
    }
    GiveCardsPlayer1(cr, s, isWinning) {

        return this.GiveCards(cr, s, true, isWinning);
    };
    GiveCardsPlayer2(cr, s, isWinning) {
        return this.GiveCards(cr, s, false, isWinning);

    };

    GiveStartingCards() {
        let v = new Array(0);
        let i = 0;
        for (; i < 7; i++) {
            v[v.length]=(this.d.GetCard());
        }
        return v;
    };

    CheckStack() {
        let r = new Constraint();
        this.crd1 = this.d.PeekCard();
        r.pickUpTwo = this.crd1.isTwo();
        r.rank = this.crd1.getNo();
        r.suite = this.crd1.getSuite();
        r.waitATurn = this.crd1.isEight();
        return r;
    };

    constructor() {
        this.waitATurn = false;
        this.player1Turn = true;
        this.Player1LastCards = false;
        this.Player2LastCards = false;
        this.d.Shuffle();
    }
    setD(dt) {
        this.d = dt;
    }
    getD(dt) {
        return this.d;
    }
};
