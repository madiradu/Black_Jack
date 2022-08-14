import { QMessageBox, ButtonRole, QMainWindow, QWidget, QLabel, FlexLayout, QPushButton, QIcon, QInputDialog, QGridLayout, WidgetEventTypes, QAction, QLayout, QWindow } from '@nodegui/nodegui';

import { Constraint } from './constraint';
import { Suite } from './suite';
import { Color } from './color';
import { Card } from './card';
import { Deck } from './deck';
import { Player } from './player';
import { Dealer } from './dealer';
import { QEvent } from '@nodegui/nodegui/dist/lib/QtGui/QEvent/QEvent';


declare module NodeJS {
    interface Global {
        port: string;
        INIT: boolean;
        one: Object;
        cards: Object[];
        DEALER: boolean;
        IS_OUR_TURN: boolean;
        GET_DECK: boolean;
    }
}


export function clear() {





    layer(global.win);

    delete require.cache[require.resolve('./dynamic.ts')];
    delete require.cache[require.resolve('./index.js')];
    delete require.cache[require.resolve('./app.ts')];
    if (typeof global.win !== 'undefined' && global.win !== null) global.win.cache = {}


}

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
function layer(qWin: QMainWindow) {
    

    qWin.setWindowTitle("Black Jack");


    const centralWidget = new QWidget();
    centralWidget.setObjectName("root");

    const layout1 = new QGridLayout();

    const layout2 = new QGridLayout();


    var input = new QInputDialog();
    input.setObjectName("ip");
    input.setFixedHeight(20);
    input.setFixedWidth(200);


    input.addEventListener(WidgetEventTypes.Close, function handleClick(this: QInputDialog) {
        //this.stopImmediatePropagation();
        clear();

    });

    input.addEventListener(WidgetEventTypes.KeyRelease, function handleClick(g) {
        // global.port = this.textValue();

        clear();
    });

    const button = new QPushButton();

    button.setText("push the button");
    if (!!global.IS_OUR_TURN) {
        button.setDisabled(true);
    }
    else {
        button.setDisabled(false);
    }

    button.addEventListener('clicked', () => {
        clear();


    });

    /*button.addEventListener(WidgetEventTypes.ActivationChange, function handleClick(this: QPushButton) {


        (global.one as Player).GiveCards(global.cards as Card[]);
        clear();
        


    });*/
    const label2 = new QLabel();
    label2.setFixedHeight(200);
    label2.setFixedWidth(154);
    label2.setText("");

    label2.setInlineStyle(`
  ;
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
            label3.setFixedWidth(20);
            label3.setFixedHeight(26);
            const strng = swtch(hand[i]);
            label3.setInlineStyle(`left:` + i * 94 + `px;` + strng + "width:94;");
            label3.setAccessibleName(hand.no + "_" + hand.s + "_" + hand.c);

            function handleClick(this: QLabel) {
                const cardsT: Card[] = new Array<Card>(0);
                let am: string[] = label3.accessibleName().split("_"); let an: number[] = new Array<number>(0); let is: string = "";
                for (is in am) {
                    an[an.length] = parseInt(is);
                }
                const c: Card = new Card(an);
                cardsT[cards.length] = c;
                global.cards = cardsT;
            };

            label3.addEventListener(WidgetEventTypes.ActivationChange, handleClick);
            grid.addWidget(label3, 0, i, 1, 1);

        }
        view.setLayout(grid);

    }
    else {
        const lay = new FlexLayout();
        const label3 = new QLabel();
        label3.setText("Label");
        label2.setObjectName("02");
        lay.addWidget(label3);

        view.setLayout(lay);

    }
    view.setFixedHeight(40);
    view.setFixedWidth(300);

    layout2.addWidget(input, 0, 0, 1, 1);
    layout2.addWidget(label2, 1, 0, 1, 1);
    layout2.addWidget(view, 2, 0, 1, 1);
    layout2.addWidget(button, 3, 0, 1, 1);


    const view2 = new QWidget();
    view2.setLayout(layout2);
    layout1.addWidget(view2, 1, 1, 1, 1);

    centralWidget.setLayout(layout1);
    centralWidget.setFixedWidth(1000);
    centralWidget.setFixedHeight(600);
    qWin.setCentralWidget(centralWidget);
    qWin.setStyleSheet("#layout {width: 700px; height: 500px; position: absolute; padding:20px}");

    (global as any).win = qWin;
}

function main() {
    if (typeof global.win !== 'undefined' && global.win !== null) global.win.cache = {}
    const win = new QMainWindow();
    (global as any).win = win;

    layer(global.win);
    global.win.show();


}

main();




