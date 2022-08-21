/* eslint-disable */

import { Constraint } from './constraint';
import { Suite } from './suite';
import { Color } from './color';
import { Deck } from './deck';
import { Player } from './player';

import { Card } from './card';

export class Dealer {
    d = new Deck();
    vect = new Array(0);
    waitATurn = false;
    player1Turn = true;
    Player1LastCards = false;
    Player2LastCards = false;
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
        if (r.getWaitATurn()) {
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
            c.push(this.d.GetCard());
            return c;
        }

        if (cr[0].fs() != r.getCard().fs() && cr[0].fno() != r.getCard().fno()) {
            fault = true;
        }
        if (!fault) {
            //TODO
            let i = 1;
            for (; i < cr.length; i++) {
                if (cr[i].fs() != r.getCard().fs() || cr[i].fno() != (r.getCard().fno() + i)) {
                    fault = true;
                    break;
                }
            }
        }
        if (fault) {
            let i = null;
            for (i of cr) {
                c.push(i);
            }
            c.push(this.d.GetCard());
            c.push(this.d.GetCard());
        } else {
            let i = 0;
            for (; i < cr.size(); i++) {
                this.d.PushCard(cr[i]);
            }
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
        let v = new Array(7);
        let i = 0;
        for (; i < 7; i++) {
            v[i] = (this.d.GetCard());
        }
        return v;
    };

    CheckStack() {
        let r = new Constraint();
        let crd1 = this.d.PeekCard();
        r.setPickUpTwo(crd1.isTwo());
        r.setCard(crd1);
        r.setWaitATurn(crd1.isEight());
        return r;
    };

    constructor() {
        this.d.Shuffle();
    };
    setD(dt) {
        this.d = dt;
    };
    //TODO 
    getD() {
        return this.d;
    };
};