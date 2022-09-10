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


    if (typeof global.INIT == 'undefined' || global.INIT == null || global.INIT == false) {



        const d = new Dealer();


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
            if (typeof global.INIT == 'undefined' || global.INIT == null || global.INIT == false) {
                global.DEALER = false;
                global.GET_DECK = true;
            }

            if (typeof global.GET_DECK !== 'undefined' && global.GET_DECK !== null && global.GET_DECK == true ) {


      

                //var host = ip;
                const host = '192.168.0.1';

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
                const anon = function (key, value) {
                    return value;
                };
                socket.on('data', (data) => {

                    let deck = { ...new Deck(), ...JSON.parse(data.toString()) };
                    let j = 0;
                    for (; j < deck.getD().length; j++) {
                        deck.getD()[j] = { ...new Card(0, 4, 0), ...(JSON.parse(deck.getD()[j], anon)) };
                    }


                    global.dealer1.setD(deck);

                    if (typeof global.INIT == 'undefined' || global.INIT == null || global.INIT == false) {
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

    const port = 8001;
    if (typeof global.INIT == 'undefined' || global.INIT == null || global.INIT == false) {
        let cards1 = new Array(0);


        cards1 = (global.dealer1.GiveStartingCards());



        const one1 = new Player(cards1);
        global.one = (one1);


        global.one.SetDealer(global.dealer1);



    }
    if (typeof global.one !== 'undefined' && global.one !== null) {



        const server = http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end();

            //server.close();
        });

       
        server.on('request', function (req, res) {

            let strng = "";

            try {
                strng = JSON.stringify(global.one.GetDealer().getD());//getD

            }
            catch (e) { ; }       
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(strng + " ");
            res.end();

          
            if (typeof global.INIT == 'undefined' || global.INIT == null || global.INIT == false) {
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