/* eslint no-use-before-define: 0 */  // --> OFF

import { Dealer } from './dealer';
import { Player } from './player';
import { Constraint } from './constraint';
import { Deck } from './deck';

import { Suite } from './suite';
import { Color } from './color';

export class Card {
    no;
    s;
    c;
    isAce() {
        if (this.no == 1) {
            return true;
        }
        return false;
    };
    isTwo() {
        if (this.no == 2) {
            return true;
        }
        return false;
    };
    isSeven() {
        if (this.no == 7) {
            return true;
        }
        return false;

    };
    isEight() {
        if (this.no == 8) {
            return true;
        }
        return false;
    };
    isBlackJack() {
        if (this.no == 0 && this.c == Color.black) {
            return true;
        }
        return false;
    };
    isRedJack() {
        if (this.no == 0 && this.c == Color.red) {
            return true;
        }
        return false;
    };
    isQueen() {
        if (this.no == 13) {
            return true;
        }
        return false;
    };
    isKing() {
        if (this.no == 14) {
            return true;
        }
        return false;
    };
    getSuite() {
        return this.s;
    };
    getNo() {
        return this.no;
    };
    getColor() {
        return this.c;
    };
    constructor(n, st, co) {

        this.no = n; this.s = st; this.c = co;

    };


};
