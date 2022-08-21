/* eslint-disable */

import { Card } from './card';

export class Constraint {
    waitATurn;
    pickUpTwo;
    card;
    getWaitATurn() {
        return this.waitATurn;
    };
    setPickUpTwo(two) {
        this.pickUpTwo = two;
    };
    setCard(card) {
        this.card = card;
    };
    setWaitATurn(wait) {
        this.waitATurn = wait;
    };
    getPickUpTwo() {
        return this.pickUpTwo;
    };
    getCard() {
        return this.card;
    };
};
