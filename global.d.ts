declare global {
    var Config: {
        port: string;
		one: Any; 
		cards:Any[];
		INIT: boolean;
		DEALER: boolean;
		IS_OUR_TURN: boolean;
		GET_DECK: boolean;
		_step1;
    };
    var port: string;
	var one: Any;
	var cards: Any[];
	var INIT: boolean;
	var DEALER: boolean;
	var IS_OUR_TURN: boolean;
	var GET_DECK: boolean;
	var _step1;
}
export { };