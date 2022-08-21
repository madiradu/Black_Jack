/* eslint no-use-before-define: 0 */  // --> OFF


import { Suite } from './suite';
import { Color } from './color';


export function Card(n, st, co) {
    this.no = n; this.s = st; this.c = co;
    this.isAce = function () {
        if(this.no == 1) {
            return true;
        };
        return false;
    };

    this.isTwo = function () {
        if(this.no == 2) {
            return true;
        };
        return false;
    };
    this.isSeven = function () {
        if(this.no == 7) {
            return true;
        };
        return false;

    };
    this.isEight = function () {
        if(this.no == 8) {
            return true;
        };
        return false;
    };
    this.isBlackJack = function () {
        if(this.no == 0 && this.c == Color.black) {
            return true;
        };
        return false;
    };
    this.isRedjack = function () {
        if(this.no == 0 && this.c == Color.red) {
            return true;
        };
        return false;
    };
    this.isQueen = function () {
        if(this.no == 13) {
            return true;
        };
        return false;
    };
    this.isKing = function () {
        if(this.no == 14) {
            return true;
        };
        return false;
    };



    this.fno = function () {
        return this.no;
    };

    this.fs = function () {
        return this.s;
    };

    this.fc = function () {
        return this.c;
    };

};


