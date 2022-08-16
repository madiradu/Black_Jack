declare global {
    var Config: {
        port: string;
		one: Any; 
		cards:Any[];
		INIT: boolean;
		DEALER: boolean;
		IS_OUR_TURN: boolean;
		GET_DECK: boolean;
		win: Any;

    };
    var port: string;
	var one: Any;
	var cards: Any[];
	var INIT: boolean=false;
	var DEALER: boolean=false;
	var IS_OUR_TURN: boolean=false;
	var GET_DECK: boolean=false;
	var win: Any;

}
export {one, cards, INIT, DEALER, IS_OUR_TURN, GET_DECK };