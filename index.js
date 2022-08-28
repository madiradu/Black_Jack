import { QMessageBox, ButtonRole, QMainWindow, QWidget, QLabel, FlexLayout, QPushButton, QIcon, QInputDialog, QGridLayout, WidgetEventTypes, QAction, QLayout } from '@nodegui/nodegui';
import { Constraint } from './constraint';
import { Suite } from './suite';
import { Color } from './color';
import { Deck } from './deck';
import { Player } from './player';
import { Dealer } from './dealer';
import { clear } from './dynamic';
import { layer } from './dynamic';

require("./dynamic");
require('sharp');
import { Card } from './card';

//same port
//change ip


export function mainT() {


    if (!!global.INIT) {



        var d = new Dealer();


        global.dealer1 = d;

        // clear();




        //log1.info('Hello, log' + one1.GetDealer().getD().PeekCard().getNo());

        global.DEALER = false;


        global.INIT = false;

        global.IS_OUR_TURN = false;

        global.GET_DECK = false;


        setImmediate(serve);

        /*var log1 = require('electron-log');
        log1.transports.console.level = false;
        log1.info('Hello, log');*/

        setImmediate(listenToOtherSide);


        clear();

    }





}
export function listenToOtherSide() {
    const net = require('node:net');
    while (true) {
        try {
            if (!!global.INIT) {
                //global.DEALER = false;
                global.GET_DECK = true;
            }

            if (!!global.GET_DECK) {

                //var host = ip;
                const host = '127.0.0.1';

                const port = 8001;

                const socket = new net.Socket();
                socket.connect(port, host, () => {
                    socket.write('GET / HTTP/1.0\r\n\r\n');
                    socket.write("Host: " + host + "\r\n");
                    socket.write("User-Agent: Node.js HTTP client\r\n");
                    socket.write("Accept: application/json\r\n");
                    socket.write("Accept-Language: en-US\r\n");
                    socket.write("Connection: close\r\n\r\n");
                });

                socket.on('data', (data) => {




                    let deck = { ...new Deck(), ...JSON.parse(data) };
                    let j = 0;
                    for (; j < deck.getD().length; j++) {
                        deck.getD()[j] = { ...new Card(0, 4, 0), ...(JSON.parse(deck.getD()[i], anon)) };
                    }


                    global.dealer1.setD(deck);

                    if (!!global.INIT) {
                        let cards1 = new Array(0);

                        cards1 = (global.dealer1.GiveStartingCards());


                        const one1 = new Player(cards1);
                        global.one = (one1);
                        global.one.SetDealer(global.dealer1);

                    }


                    global.GET_DECK = false;
                    global.IS_OUR_TURN = true;
                    clear();
                    socket.destroy();
                });
            }

        } catch (e) {

        }
    }
}

export function serve() {
    const http = require('http');

    const port = 8002;
    let strng = "";
    if (!!global.INIT) {
        let cards1 = new Array(0);


        cards1 = (global.dealer1.GiveStartingCards());



        const one1 = new Player(cards1);
        global.one = (one1);


        global.one.SetDealer(global.dealer1);



    }
    if (typeof global.one !== 'undefined' && global.one !== null) {

        try {
            strng = JSON.stringify(global.one.GetDealer().getD());//getD

        }
        catch (e) { ; }


        const server = http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(strng + " ");
            res.end();

            //server.close();
        });

        server.on('connect', (req, clientSocket, head) => {
            if (!!global.INIT) {
                global.DEALER = true;
                if (typeof global.one !== 'undefined' && global.one !== null) {
                    global.one.StartGame();
                }
            }
            global.INIT = true;
            global.GET_DECK = true;
            clear();
        });

        server.listen(port);
    }
}


//npm run build
//npx nodegui-packer --pack ./dist
//pkg dist\nodegui_core-3adbbaeeeb2020b63878cdf3a3f4b618.node -t node14-win-x64