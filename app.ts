import { QMainWindow, QWidget, QLabel, FlexLayout, QPushButton, QIcon, QInputDialog, QGridLayout, WidgetEventTypes } from '@nodegui/nodegui';
import { serve } from './index';
import { listenToOtherSide } from './index';
import { mainT } from './index';
import { Dealer } from './dealer';
import { Player } from './player';
import { Card } from './card';
import { Color} from './color';
import { Constraint } from './constraint';
import { Deck } from './deck';
import { Suite}  from './suite';


//mainT();


function swtch(hand: { no: string; s: string; c: string; }) {
    switch (hand.no + "_" + hand.s + "_" + hand.c) {
        case "2_1_0": {//2 of hearts
            //statements; 
            return "background: url('iwG3hK.png') -94 0;";
        }
        case "3_1_0": {//2 of hearts
            //statements; 
            return "background: url('iwG3hK.png') -188 0;";
        }
        case "4_1_0": {//2 of hearts
            //statements; 
            return "background: url('iwG3hK.png') -282 0;";
        }
        case "5_1_0": {//2 of hearts
            //statements; 
            return "background: url('iwG3hK.png') -376 0;";
        }
        case "6_1_0": {//2 of hearts
            //statements; 
            return "background: url('iwG3hK.png') -470 0;";
        }
        case "7_1_0": {//2 of hearts
            //statements; 
            return "background: url('iwG3hK.png') -564 0;";
        }
        case "8_1_0": {//2 of hearts
            //statements; 
            return "background: url('iwG3hK.png') -658 0;";
        }
        case "9_1_0": {//2 of hearts
            //statements; 
            return "background: url('iwG3hK.png') -752 0;";
        }
        case "10_1_0": {//2 of hearts
            //statements; 
            return "background: url('iwG3hK.png') -846 0;";
        }
        case "11_1_0": {//2 of hearts
            //statements; 
            return "background: url('iwG3hK.png') -940 0;";
        }
        case "12_1_0": {//2 of hearts
            //statements; 
            return "background: url('iwG3hK.png') -1034 0;";
        }
        case "13_1_0": {//2 of hearts
            //statements; 
            return "background: url('iwG3hK.png') -1128 0;";
        }
        case "14_1_0": {//2 of hearts
            //statements; 
            return "background: url('iwG3hK.png') -1222 0;";
        }
        case "0_4_0": {//red joker
            //statements; 
            return "background: url('iwG3hK.png') 0 -144;";
        }
        case "": {
            return "";
        }
        default: {
            //statements; 
            return "background: url('iwG3hK.png') 0 -144;";
        }
    }
}

const win = new QMainWindow();
win.setWindowTitle("Hello World");



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
// @ts-ignore: Unreachable code erro

button.addEventListener(type, function handleClick(event: Object) {
    global.one.GiveCards(global.cards);
});
const label2 = new QLabel();
//label2.setFixedHeight(200);
//label2.setFixedWidth(154);
label2.setText("hi");
label2.setInlineStyle(`
  color: red;
`);
//const hand = window.one.hand;
let player = global.one;
let hand = null;
if (typeof player !== 'undefined' && player !== null) { hand = player.getHand(); }
const view = new QWidget();

if (typeof hand !== 'undefined' && hand !== null) {
    const grid = new QGridLayout();

    var i = 0;
    let cards: Card[] = new Array(0);
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
            const cardsT: Card[] = new Array(0);
            const d = global.one.GetDealer().getD();
            let am: string[] = label3.accessibleName().split("_"); let an:number[]=new Array(0); let is:string = "";
            for (is in am) {
                an[an.length] = parseInt(is);
            }
            const c:Card = new Card(an);
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

