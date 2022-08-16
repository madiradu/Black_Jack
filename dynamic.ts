import { QPixmap, QMessageBox, ButtonRole, QMainWindow, QWidget, QLabel, FlexLayout, QPushButton, QIcon, QInputDialog, QGridLayout, WidgetEventTypes, QAction, QLayout, QWindow, QTextEdit, QImage, QRect, QPicture } from '@nodegui/nodegui';
import { Constraint } from './constraint';
import { Suite } from './suite';
import { Color } from './color';
import { Card } from './card';
import { Deck } from './deck';
import { Player } from './player';
import { Dealer } from './dealer';
import { Sharp } from 'sharp';

declare module NodeJS {
    interface Global {
        port: string;
        INIT: boolean;
        one: Object;
        cards: Object[];
        DEALER: boolean;
        IS_OUR_TURN: boolean;
        GET_DECK: boolean;
        win: Object;
    }
}


export function clear() {


    if (typeof global.win !== 'undefined' && global.win !== null) layer(global.win);

    delete require.cache[require.resolve('./dynamic.ts')];
    delete require.cache[require.resolve('./index.js')];
    delete require.cache[require.resolve('./app.ts')];
    if (typeof global.win !== 'undefined' && global.win !== null) global.win.cache = {}




}

function swtch(hand: Card) {
    let strng = "";
    strng = hand.getNo().toString() + "_" + hand.getSuite().toString() + "_" + hand.getColor().toString();
    //  const st = "C:/Users/cris1/Music/sprites/iwG3hK.png";
    const swt: number[] = new Array<number>(2);
    switch (strng) {
        case "2_1_0": {//2 of hearts

            swt[0] = 72; swt[1] = 0; break;
        };
        case "3_1_0": {//2 of hearts

            swt[0] = 144; swt[1] = 0; break;
        };
        case "4_1_0": {//2 of hearts

            swt[0] = 216; swt[1] = 0; break;
        }
        case "5_1_0": {//2 of hearts

            swt[0] = 288; swt[1] = 0; break;
        }
        case "6_1_0": {//2 of hearts

            swt[0] = 360; swt[1] = 0; break;
        }
        case "7_1_0": {//2 of hearts

            swt[0] = 432; swt[1] = 0; break;
        }
        case "8_1_0": {//2 of hearts

            swt[0] = 504; swt[1] = 0; break;
        }
        case "9_1_0": {//2 of hearts

            swt[0] = 576; swt[1] = 0; break;
        }
        case "10_1_0": {//2 of hearts

            swt[0] = 648; swt[1] = 0; break;
        }
        case "11_1_0": {//2 of hearts

            swt[0] = 720; swt[1] = 0; break;
        }
        case "12_1_0": {//2 of hearts

            swt[0] = 792; swt[1] = 0; break;
        }
        case "13_1_0": {//2 of hearts

            swt[0] = 864; swt[1] = 0; break;
        }
        case "14_1_0": {//2 of hearts

            swt[0] = 936; swt[1] = 0; break;
        }
        case "2_0_0": {//2 of hearts

            swt[0] = 72; swt[1] = 94; break;
        }
        case "3_0_0": {//2 of hearts

            swt[0] = 144; swt[1] = 94; break;
        }
        case "4_0_0": {//2 of hearts

            swt[0] = 216; swt[1] = 94; break;
        }
        case "5_0_0": {//2 of hearts

            swt[0] = 288; swt[1] = 94; break;
        }
        case "6_0_0": {//2 of hearts

            swt[0] = 360; swt[1] = 94; break;
        }
        case "7_0_0": {//2 of hearts

            swt[0] = 432; swt[1] = 94; break;
        }
        case "8_0_0": {//2 of hearts

            swt[0] = 504; swt[1] = 94; break;
        }
        case "9_0_0": {//2 of hearts

            swt[0] = 576; swt[1] = 94; break;
        }
        case "10_0_0": {//2 of hearts

            swt[0] = 648; swt[1] = 94; break;
        }
        case "11_0_0": {//2 of hearts

            swt[0] = 720; swt[1] = 94; break;
        }
        case "12_0_0": {//2 of hearts

            swt[0] = 792; swt[1] = 94; break;
        }
        case "13_0_0": {//2 of hearts

            swt[0] = 864; swt[1] = 94; break;
        }
        case "14_0_0": {//2 of hearts

            swt[0] = 936; swt[1] = 94; break;
        }
        case "2_2_0": {//2 of hearts

            swt[0] = 72; swt[1] = 94; break;
        }
        case "3_2_0": {//2 of hearts

            swt[0] = 144; swt[1] = 94; break;
        }
        case "4_2_0": {//2 of hearts

            swt[0] = 216; swt[1] = 94; break;
        }
        case "5_2_0": {//2 of hearts

            swt[0] = 288; swt[1] = 94; break;
        }
        case "6_2_0": {//2 of hearts

            swt[0] = 360; swt[1] = 94; break;
        }
        case "7_2_0": {//2 of hearts

            swt[0] = 432; swt[1] = 94; break;
        }
        case "8_2_0": {//2 of hearts

            swt[0] = 504; swt[1] = 94; break;
        }
        case "9_2_0": {//2 of hearts

            swt[0] = 576; swt[1] = 94; break;
        }
        case "10_2_0": {//2 of hearts

            swt[0] = 648; swt[1] = 94; break;
        }
        case "11_2_0": {//2 of hearts

            swt[0] = 720; swt[1] = 94; break;
        }
        case "12_2_0": {//2 of hearts

            swt[0] = 792; swt[1] = 94; break;
        }
        case "13_2_0": {//2 of hearts

            swt[0] = 864; swt[1] = 94; break;
        }
        case "14_2_0": {//2 of hearts

            swt[0] = 936; swt[1] = 94; break;
        }
        case "2_3_0": {//2 of hearts

            swt[0] = 72; swt[1] = 282; break;
        }
        case "3_3_0": {//2 of hearts

            swt[0] = 144; swt[1] = 282; break;
        }
        case "4_3_0": {//2 of hearts

            swt[0] = 216; swt[1] = 282; break;
        }
        case "5_3_0": {//2 of hearts

            swt[0] = 288; swt[1] = 282; break;
        }
        case "6_3_0": {//2 of hearts

            swt[0] = 360; swt[1] = 282; break;
        }
        case "7_3_0": {//2 of hearts

            swt[0] = 432; swt[1] = 282; break;
        }
        case "8_3_0": {//2 of hearts

            swt[0] = 504; swt[1] = 282; break;
        }
        case "9_3_0": {//2 of hearts

            swt[0] = 576; swt[1] = 282; break;
        }
        case "10_3_0": {//2 of hearts

            swt[0] = 648; swt[1] = 282; break;
        }
        case "11_3_0": {//2 of hearts

            swt[0] = 720; swt[1] = 282; break;
        }
        case "12_3_0": {//2 of hearts

            swt[0] = 792; swt[1] = 282; break;
        }
        case "13_3_0": {//2 of hearts

            swt[0] = 864; swt[1] = 282; break;
        }
        case "14_3_0": {//2 of hearts

            swt[0] = 936; swt[1] = 282; break;
        }
        case "0_4_0": {//red joker

            swt[0] = 0; swt[1] = 144; break;//backgroundposition: 0; swt[1]=144;break;
        }
        case "0_4_1": {//black joker

            swt[0] = 0; swt[1] = 216; break;//backgroundposition: 0; swt[1]=216;break;
        }
        case "1_1_0": {//ace of heart

            swt[0] = 0; swt[1] = 0; break;//backgroundposition: 0; swt[1]=0;break;
        } case "1_0_1": {//ace of club

            swt[0] = 0; swt[1] = 72; break;//backgroundposition: 0; swt[1]=72;break;
        } case "1_2_0": {//ace of diamond

            swt[0] = 0; swt[1] = 282; break;//backgroundposition: 0; swt[1]=21;break;
        } case "1_3_1": {//ace of spades

            swt[0] = 936; swt[1] = 282; break;//verif
        }
        default: {

            swt[0] = 936; swt[1] = 282; break;
        }
    }

    return swt;
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
    let hand: Card[] = new Array(0);
    if (typeof player !== 'undefined' && player !== null) {
        hand = player.getHand();
    }


    const view = new QWidget();
    let styleSheet: string = "";
    if (typeof hand !== 'undefined' && hand !== null) {
        const grid = new QGridLayout();

        let i = 0;
        for (; i < hand.length; i++) {
            if (i == 19) break;

            let strng = "";
    

            const stv = swtch(hand[i]);

                 
            const sharp = require('sharp');

          


            // file name for cropped image
            let outputImage = './croppedImage.png';
            sharp("C:/Users/cris1/Music/sprites/iwG3hK.png").extract({ width: 72, height: 94, left: stv[0], top: stv[1] }).toFile(outputImage)
                .then(function (new_file_info: any) {
                    console.log("Image cropped and saved");
                })
                .catch(function (err: any) {
                    console.log("An error occured");
                });


            const lbl = new QLabel();

            const label3 = new QPicture();
            const lbb = new QImage(outputImage);
            label3.load(outputImage);

            //label3.setInlineStyle(`left:` + i * 94 + `px; ` + strng + " width:94;");
            // label3.setAccessibleName("_" + hand[i].getNo().toString() + "_" + hand[i].getSuite().toString() + "_" + hand[i].getColor.toString());
            //label3.setObjectName("_" + hand[i].getNo().toString() + "_" + hand[i].getSuite().toString() + "_" + hand[i].getColor.toString());

            function handleClick(this: QLabel) {

                let cardsT = new Array(0);
                let am: string[] = this.accessibleName().split("_");
                am.shift();
                let an: number[] = new Array<number>(0);
                let is: string = "";
                for (is of am) {
                    an[an.length] = parseInt(is);
                }
                const c: Card = new Card(an);

                cardsT = structuredClone(global.cards);
                let card = null;
                let j = 0;
                for (; j < cardsT.length; j++) {
                    cardsT[j] = { ...new Card(), ...cardsT[j] };
                }
                cardsT[cardsT.length] = c;
                global.cards = cardsT;

            };

            //label3.addEventListener(WidgetEventTypes.ActivationChange, handleClick);

            lbl.setFixedHeight(94);
            lbl.setFixedWidth(72);
            lbl.setPixmap(QPixmap.fromImage(lbb, 0));
            

            grid.addWidget(lbl, 0, i, 1, 1);



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
    global.port = styleSheet;
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




