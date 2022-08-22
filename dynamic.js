import { QDragLeaveEvent, QDragMoveEvent, QDropEvent,QPixmap, QMenu, QMessageBox, ButtonRole, QMainWindow, QWidget, QLabel, FlexLayout, QPushButton, QIcon, QInputDialog, QGridLayout, WidgetEventTypes, QAction, QLayout, QWindow, QTextEdit, QImage, QRect, QPicture, QMoveEvent, QDrag } from '@nodegui/nodegui';
import { Constraint } from './constraint';
import { Suite } from './suite';
import { Color } from './color';
import { Deck } from './deck';
import { Player } from './player';
import { Dealer } from './dealer';
import { Sharp } from 'sharp';

import { Card } from './card';

/*
declare module NodeJS {
    interface Global {
        port;
        INIT;
        one: Object;
        cards: Object[];
        DEALER;
        IS_OUR_TURN;
        GET_DECK;
        win: Object;
    }
}
*/

export function clear() {

    if (typeof global.win !== 'undefined' && global.win !== null) layer(global.win);

    delete require.cache[require.resolve('./dynamic.js')];
    delete require.cache[require.resolve('./index.js')];
    delete require.cache[require.resolve('./app.ts')];
    if (typeof global.win !== 'undefined' && global.win !== null) global.win.cache = {}


}
function swtch(hand) {
    let strng = "";
    strng = hand.fno().toString() + "_" + hand.fs().toString() + "_" + hand.fc().toString();
    //  const st = "C:/Users/cris1/Music/sprites/iwG3hK.png";
    const swt = new Array(2);
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

            swt[0] = 0; swt[1] = 188; break;//backgroundposition: 0; swt[1]=144;break;
        }
        case "0_4_1": {//black joker

            swt[0] = 0; swt[1] = 282; break;//backgroundposition: 0; swt[1]=216;break;
        }
        case "1_1_0": {//ace of heart

            swt[0] = 936; swt[1] = 0; break;//backgroundposition: 0; swt[1]=0;break;
        } case "1_0_1": {//ace of club

            swt[0] = 936; swt[1] = 94; break;//backgroundposition: 0; swt[1]=72;break;
        } case "1_2_0": {//ace of diamond

            swt[0] = 936; swt[1] = 188; break;//backgroundposition: 0; swt[1]=21;break;
        } case "1_3_1": {//ace of spades

            swt[0] = 936; swt[1] = 282; break;//verif
        }
        default: {

            swt[0] = 0; swt[1] = 0; break;
        }
    }

    return swt;
}

export function layer(qWin) {

    qWin.setWindowTitle("Black Jack");


    const centralWidget = new QWidget();
    centralWidget.setObjectName("root");

    const layout1 = new QGridLayout();

    const layout2 = new QGridLayout();

    let input = new QInputDialog();
    input.setObjectName("ip");
    input.setFixedHeight(20);
    input.setFixedWidth(200);

    input.addEventListener(WidgetEventTypes.Close, function handleClick(e) {
        //this.stopImmediatePropagation();
        // clear();

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
    const label2 = new QPushButton();
    label2.setFixedHeight(200);
    label2.setFixedWidth(154);
    label2.setText("......................................................................................................................");
    label2.setAcceptDrops(true);

    label2.addEventListener(WidgetEventTypes.Enter, (e) => {
        let ev = new QDragMoveEvent(e);
       

        ev.accept(); //Accept the drop event, which is crucial for accepting further events
    });

   /* label2.addEventListener(WidgetEventTypes.DragMove, (e) => {
        let ev = new QDragMoveEvent(e);
    });
    label2.addEventListener(WidgetEventTypes.DragLeave, (e) => {
        let ev = new QDragLeaveEvent(e);
        ev.ignore(); //Ignore the event when it leaves
    });*/

    label2.addEventListener(WidgetEventTypes.Drop, (e) => {

        let dropEvent = new QDropEvent(e);
        

    });
    let player = global.one;

    let hand = new Array(0);
    if (typeof player !== 'undefined' && player !== null) {
        hand = player.getHand();
    }

    const view = new QWidget();
    let styleSheet = "";
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
            sharp("C:/Users/cris1/Music/sprites/iwG3hK.png").extract({ width: 72, height: 94, left: stv[0], top: stv[1] }).resize(20, 26).toFile(outputImage)
                .then(function (new_file_info) {
                    console.log("Image cropped and saved");
                })
                .catch(function (err) {
                    console.log("An error occured");
                });

            const lbl = new QPushButton();

            //const label3 = new QPicture();
            const lbb = new QImage(outputImage);
           // label3.load(outputImage);

           // lbl.setAccessibleName("_" + hand[i].fno().toString() + "_" + hand[i].fs().toString() + "_" + hand[i].fc().toString());
            //lbl.setObjectName("_" + hand[i].fno().toString() + "_" + hand[i].fs().toString() + "_" + hand[i].fc().toString());

            function handleClick(e) {

                let cardsT = new Array(0);
                let am = e.accessibleName().split("_");
                am.shift();
                let an = new Array(0);
                let is = "";
                for (is of am) {
                    an.push(parseInt(is));
                }

                const c = new Card(an[0], an[1], an[2]);

                cardsT = global.cards.slice();

                cardsT.push(c);
                global.cards = cardsT.slice();


            };

           
            const pxmap = QPixmap.fromImage(lbb, 0);

            

            lbl.addEventListener(WidgetEventTypes.MouseButtonPress, () => {
                
                const qdrag = new QDrag(this);
                qdrag.setPixmap(pxmap);
                qdrag.setAcceptDrops(true);
                const drop = qdrag.exec();
 
            });
     
            
            lbl.setFixedHeight(26);
            lbl.setFixedWidth(20);

            lbl.setStyleSheet("background-image: url('" + outputImage +"');");
            
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
    global.win = qWin;
}

function main() {
    if (typeof global.win !== 'undefined' && global.win !== null) global.win.cache = {}
    const win = new QMainWindow();
    global.win = win;

    layer(global.win);
    global.win.show();

}

main();


