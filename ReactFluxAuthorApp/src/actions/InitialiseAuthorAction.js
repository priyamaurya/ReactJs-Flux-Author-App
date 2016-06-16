var Dispatcher = require('../dispatcher/AppDispatcher');
var AuthorApi = require('../util/AuthorApi');
var AppConstants = require('../constants/AppConstants');

var IntializeAuthorApp = {
 
 	intiApp :function (){	
 	Dispatcher.dispatch({
 			actionType :AppConstants.INITIALIZE,
 			intidata :{
 				authors :AuthorApi.getAllAuthors()
 			}
 	});

}
};

module.exports = IntializeAuthorApp;