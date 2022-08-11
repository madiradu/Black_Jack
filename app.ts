import { QMainWindow, QWidget, QLabel, FlexLayout, QPushButton, QIcon, QInputDialog, QGridLayout, WidgetEventTypes } from '@nodegui/nodegui';
import { serve } from './index';
import { listenToOtherSide } from './index';
import { mainT } from './index';
import { Constraint } from './constraint';
import { Suite } from './suite';
import { Color } from './color';
import { Card } from './card';
import { Deck } from './deck';
import { Player } from './player';
import { Dealer } from './dealer';

declare module NodeJS {
    interface Global {
        INIT: boolean;
        one: Object;
        cards: Object[];
        DEALER: boolean;
        IS_OUR_TURN: boolean;
        GET_DECK: boolean;
    }
}

mainT();

function swtch(hand: { no: string; s: string; c: string; }) {
    switch (hand.no + "_" + hand.s + "_" + hand.c) {
        case "2_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -94 0;";
        }
        case "3_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -188 0;";
        }
        case "4_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -282 0;";
        }
        case "5_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -376 0;";
        }
        case "6_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -470 0;";
        }
        case "7_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -564 0;";
        }
        case "8_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -658 0;";
        }
        case "9_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -752 0;";
        }
        case "10_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -846 0;";
        }
        case "11_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -940 0;";
        }
        case "12_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -1034 0;";
        }
        case "13_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -1128 0;";
        }
        case "14_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -1222 0;";
        }
        case "0_4_0": {//red joker

            return "background: url('iwG3hK.png') 0 -144;";
        }
        case "": {
            return "";
        }
        default: {

            return "background: url('iwG3hK.png') 0 -144;";
        }
    }
}

const win = new QMainWindow();
win.setWindowTitle("Black Jack");



const centralWidget = new QWidget();
centralWidget.setObjectName("myroot");

const layout1 = new QGridLayout();

const layout2 = new QGridLayout();


const input = new QInputDialog();
input.setObjectName("ip");
//input.setFixedHeight(20);
//input.setFixedWidth(200);


const button = new QPushButton();
const type: Object = 'ActivationChange';

if (!!global.IS_OUR_TURN) {
    button.setDisabled(true);
}
else {
    button.setDisabled(false);
}
// @ts-ignore: Unreachable code erro

button.addEventListener(type, function handleClick(event: Object) {
    (global.one as Player).GiveCards(global.cards as Card[]);
});
const label2 = new QLabel();
//label2.setFixedHeight(200);
//label2.setFixedWidth(154);
label2.setText("");
label2.setInlineStyle(`
  color: red;
`);
let player = global.one;
let hand = null;
if (typeof player !== 'undefined' && player !== null) { hand = player.getHand(); }
const view = new QWidget();

if (typeof hand !== 'undefined' && hand !== null) {
    const grid = new QGridLayout();

    var i = 0;
    let cards: Card[] = new Array<Card>(0);
    for (; i < hand.length; i++) {
        if (i == 9) break;
        const label3 = new QLabel();
        label3.setMinimumWidth(20);
        label3.setMinimumHeight(26);
        const strng = swtch(hand[i]);
        label3.setInlineStyle(`left:` + i * 94 + `px;` + strng + "width:94;");
        label3.setObjectName(hand.no + "_" + hand.s + "_" + hand.c);

        const type: Object = 'ActivationChange';
        const funct: Object = function handleClick(event: Object) {
            const cardsT: Card[] = new Array<Card>(0);
            //const d = global.one.GetDealer().getD();
            let am: string[] = label3.accessibleName().split("_"); let an: number[] = new Array<number>(0); let is: string = "";
            for (is in am) {
                an[an.length] = parseInt(is);
            }
            const c: Card = new Card(an);
            cardsT[cards.length] = c;
            global.cards = cardsT;
        };
        // @ts-ignore: Unreachable code erro

        label3.addEventListener(type, funct);
        grid.addWidget(label3, 1, hand.length > 10 ? 10 : hand.length, 1, 1);

    }
    view.setLayout(grid);

}
else {
    const lay = new FlexLayout();
    const label3 = new QLabel();
    label3.setText("hi");
    lay.addWidget(label3);
    view.setLayout(lay);

}

layout2.addWidget(input, 4, 1, 1, 1);

layout2.addWidget(view, 4, 1, 1, 1);
layout2.addWidget(button, 4, 1, 1, 1);
layout2.addWidget(label2, 4, 1, 1, 1);


const view2 = new QWidget();
view2.setLayout(layout2);
layout1.addWidget(view2, 1, 1, 1, 1);


centralWidget.setLayout(layout1);

win.setCentralWidget(centralWidget);
win.setStyleSheet(

    `
.0_4_0 {
  left: 0px;
  width: 94x;
  background: url('iwG3hK.png') 0 -144;
}

  `
);
win.show();

(global as any).win = win;

