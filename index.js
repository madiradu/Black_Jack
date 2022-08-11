import { Deck } from './deck';
import { Dealer } from './dealer';
import { Player } from './player';
import { Card } from './card';
import { Constraint } from './constraint';

import { Suite } from './suite';
import { Color } from './color';


//same port
//change ip

export function mainT() {



    /*if (typeof IS_OUR_TURN !== 'undefined' && IS_OUR_TURN) {
        //to reimplement
        // global.one.GiveCards();

        //_step1++;
        //if (_step1 == 1) {
          //  IS_OUR_TURN = false;
        //}
       // reload(true);

    }*/




    if (!!global.INIT) {
        const d = new Dealer();
        const cards1 = d.GiveStartingCards();
        const one1 = new Player(cards1);
        one1.SetDealer(d);

        global.DEALER = false;

        global.INIT = false;

        global.IS_OUR_TURN = false;

        global.GET_DECK = false;

        //global._step1 = 0;
        global.one = one1;

        setTimeout(serve, 0);

        location.reload();


    }






    setTimeout(listenToOtherSide, 0);











}
export function listenToOtherSide() {
    const net = require('net');
    while (true) {
        if (!!global.INIT) {
            global.DEALER = false;
            global.GET_DECK = true;
        }
        global.INIT = true;

        if (typeof global.GET_DECK !== 'undefined' && global.GET_DECK !== null) {

            //var host = ip;
            const host = '127.0.0.1';

            const port = 8002;

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

                const d = new Dealer();
                var json = JSON.parse(data.toString());
                d.setD(json);
                global.one.SetDealer(d);

                global.GET_DECK = false;
                global.IS_OUR_TURN = true;
                location.reload();
                socket.destroy();
            });
        }
    }
}

export function serve() {
    const http = require('http');

    const port = 8001;
    let strng = "";
    if (typeof global.one !== 'undefined' && global.one !== null) {

        try {
            strng = JSON.stringify(global.one.GetDealer());//getD 
        }
        catch (e) { ; }
    }

    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
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
        location.reload();
    });


    server.listen(port);

}






/*
function executeAsync(serve) {
    setTimeout(serve, 0);
}

function executeAsync(listenToOtherSide) {
    setTimeout(listenToOtherSide, 3000);
}*/










//npm run build
//npx nodegui-packer --pack ./dist
//pkg dist\nodegui_core-3adbbaeeeb2020b63878cdf3a3f4b618.node -t node14-win-x64