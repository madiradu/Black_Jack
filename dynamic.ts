import { QMessageBox, ButtonRole, QMainWindow, QWidget, QLabel, FlexLayout, QPushButton, QIcon, QInputDialog, QGridLayout, WidgetEventTypes, QAction, QLayout, QWindow } from '@nodegui/nodegui';
import { Constraint } from './constraint';
import { Suite } from './suite';
import { Color } from './color';
import { Card } from './card';
import { Deck } from './deck';
import { Player } from './player';
import { Dealer } from './dealer';


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

function swtch(hand2: Card) {
    const strng = hand2.getNo().toString() + "_" + hand2.getSuite().toString() + "_" + hand2.getColor().toString();
    switch (strng) {
        case "2_1_0": {//2 of hearts

            return "background: url('iwG3hK.png')  -72 -0;";
        };
        case "3_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -144 0;";
        };
        case "4_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -216 0;";
        }
        case "5_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -288 0;";
        }
        case "6_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -360 0;";
        }
        case "7_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -432 0;";
        }
        case "8_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -504 0;";
        }
        case "9_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -576 0;";
        }
        case "10_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -648 0;";
        }
        case "11_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -720 0;";
        }
        case "12_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -792 0;";
        }
        case "13_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -864 0;";
        }
        case "14_1_0": {//2 of hearts

            return "background: url('iwG3hK.png') -936 0;";
        }
        case "2_0_0": {//2 of hearts

            return "background: url('iwG3hK.png') -72 -94;";
        }
        case "3_0_0": {//2 of hearts

            return "background: url('iwG3hK.png') -144 -94;";
        }
        case "4_0_0": {//2 of hearts

            return "background: url('iwG3hK.png') -216 -94;";
        }
        case "5_0_0": {//2 of hearts

            return "background: url('iwG3hK.png') -288 -94;";
        }
        case "6_0_0": {//2 of hearts

            return "background: url('iwG3hK.png') -360 -94;";
        }
        case "7_0_0": {//2 of hearts

            return "background: url('iwG3hK.png') -432 -94;";
        }
        case "8_0_0": {//2 of hearts

            return "background: url('iwG3hK.png') -504 -94;";
        }
        case "9_0_0": {//2 of hearts

            return "background: url('iwG3hK.png') -576 -94;";
        }
        case "10_0_0": {//2 of hearts

            return "background: url('iwG3hK.png') -648 -94;";
        }
        case "11_0_0": {//2 of hearts

            return "background: url('iwG3hK.png') -720 -94;";
        }
        case "12_0_0": {//2 of hearts

            return "background: url('iwG3hK.png') -792 -94;";
        }
        case "13_0_0": {//2 of hearts

            return "background: url('iwG3hK.png') -864 -94;";
        }
        case "14_0_0": {//2 of hearts

            return "background: url('iwG3hK.png') -936 -94;";
        }
        case "2_2_0": {//2 of hearts

            return "background: url('iwG3hK.png') -72 -188;";
        }
        case "3_2_0": {//2 of hearts

            return "background: url('iwG3hK.png') -144 -188;";
        }
        case "4_2_0": {//2 of hearts

            return "background: url('iwG3hK.png') -216 -188;";
        }
        case "5_2_0": {//2 of hearts

            return "background: url('iwG3hK.png') -288 -188;";
        }
        case "6_2_0": {//2 of hearts

            return "background: url('iwG3hK.png') -360 -188;";
        }
        case "7_2_0": {//2 of hearts

            return "background: url('iwG3hK.png') -432 -188;";
        }
        case "8_2_0": {//2 of hearts

            return "background: url('iwG3hK.png') -504 -188;";
        }
        case "9_2_0": {//2 of hearts

            return "background: url('iwG3hK.png') -576 -188;";
        }
        case "10_2_0": {//2 of hearts

            return "background: url('iwG3hK.png') -648 -188;";
        }
        case "11_2_0": {//2 of hearts

            return "background: url('iwG3hK.png') -720 -188;";
        }
        case "12_2_0": {//2 of hearts

            return "background: url('iwG3hK.png') -792 -188;";
        }
        case "13_2_0": {//2 of hearts

            return "background: url('iwG3hK.png') -864 -188;";
        }
        case "14_2_0": {//2 of hearts

            return "background: url('iwG3hK.png') -936 -188;";
        }
        case "2_3_0": {//2 of hearts

            return "background: url('iwG3hK.png') -72 -282;";
        }
        case "3_3_0": {//2 of hearts

            return "background: url('iwG3hK.png') -144 -282;";
        }
        case "4_3_0": {//2 of hearts

            return "background: url('iwG3hK.png') -216 -282;";
        }
        case "5_3_0": {//2 of hearts

            return "background: url('iwG3hK.png') -288 -282;";
        }
        case "6_3_0": {//2 of hearts

            return "background: url('iwG3hK.png') -360 -282;";
        }
        case "7_3_0": {//2 of hearts

            return "background: url('iwG3hK.png') -432 -282;";
        }
        case "8_3_0": {//2 of hearts

            return "background: url('iwG3hK.png') -504 -282;";
        }
        case "9_3_0": {//2 of hearts

            return "background: url('iwG3hK.png') -576 -282;";
        }
        case "10_3_0": {//2 of hearts

            return "background: url('iwG3hK.png') -648 -282;";
        }
        case "11_3_0": {//2 of hearts

            return "background: url('iwG3hK.png') -720 -282;";
        }
        case "12_3_0": {//2 of hearts

            return "background: url('iwG3hK.png') -792 -282;";
        }
        case "13_3_0": {//2 of hearts

            return "background: url('iwG3hK.png') -864 -282;";
        }
        case "14_3_0": {//2 of hearts

            return "background: url('iwG3hK.png') -936 -282;";
        }
        case "0_4_0": {//red joker

            return "background: url('iwG3hK.png') 0 -144;";
        }
        case "0_4_1": {//black joker

            return "background: url('iwG3hK.png') 0 -216;";
        }
        case "1_1_0": {//ace of heart

            return "background: url('iwG3hK.png') 0 0;";
        } case "1_0_1": {//ace of club

            return "background: url('iwG3hK.png') 0 -72;";
        } case "1_2_0": {//ace of diamond

            return "background: url('iwG3hK.png') 0 -21;";
        } case "1_3_1": {//ace of spades

            return "background: url('iwG3hK.png') 0 -144;";
        }

        default: {

            return "background: url('iwG3hK.png') 0 -144;";
        }
    }
}

export function layer(qWin: QMainWindow) {


    qWin.setWindowTitle("Black Jack");


    const centralWidget = new QWidget();
    centralWidget.setObjectName("root");

    const layout1 = new QGridLayout();

    const layout2 = new QGridLayout();


    let input = new QInputDialog();
    input.setObjectName("ip");
    input.setFixedHeight(20);
    input.setFixedWidth(200);


    input.addEventListener(WidgetEventTypes.Close, function handleClick(this: QInputDialog) {
        //this.stopImmediatePropagation();
        clear();

    });

    input.addEventListener(WidgetEventTypes.KeyRelease, function handleClick(g) {
        // global.port = this.textValue();


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

    let player = global.one;
    let hand: Card[] = null;
    if (typeof player !== 'undefined' && player !== null) { hand = player.getHand(); }
    const view = new QWidget();
    let styleSheet: string = "";
    if (typeof hand !== 'undefined' && hand !== null) {
        const grid = new QGridLayout();

        let i = 0;
        for (; i < hand.length; i++) {
            if (i == 9) break;
            const label3 = new QLabel();
            label3.setFixedWidth(20);
            label3.setFixedHeight(26);
            //label3.setText("...............");

   

            let strng = swtch(hand[i]);//



            let style: string =
                `
                #`+ hand[i].getNo().toString() + "_" + hand[i].getSuite().toString() + "_" + hand[i].getColor().toString() + `: {
                    left:` + i * 94 + `px;` + strng + ` width:94;
                    
                }`;


            label3.setInlineStyle(`left:` + i * 94 + `px; ` + strng + " width:94;");
            label3.setAccessibleName(hand[i].getNo().toString() + "_" + hand[i].getSuite().toString() + "_" + hand[i].getColor.toString());
            label3.setObjectName(hand[i].getNo().toString() + "_" + hand[i].getSuite().toString() + "_" + hand[i].getColor.toString());

            function handleClick(this: QLabel) {
                let cardsT: Card[] = new Array<Card>(0);
                let am: string[] = this.accessibleName().split("_");
                let an: number[] = new Array<number>(0);
                let is: string = "";
                for (is of am) {
                    an[an.length] = parseInt(is);
                }
                const c: Card = new Card(an);
                
                cardsT = structuredClone(global.cards);
                let card = null;
                for (card of cardsT) {
                    card = { ...new Card(), ... card };
                }
                cardsT[cardsT.length] = c;
                global.cards = cardsT;

            };

            label3.addEventListener(WidgetEventTypes.ActivationChange, handleClick);
            grid.addWidget(label3, 0, i, 1, 1);

            styleSheet += style;
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
    qWin.setStyleSheet(styleSheet);

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




