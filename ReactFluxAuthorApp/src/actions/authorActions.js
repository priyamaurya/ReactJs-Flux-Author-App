
var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var AppConstants = require('../constants/actionConstants');

var AuthorActions = {
	createAuthor :function(author){
		var newAuthor = AuthorApi.saveAuthor(author);

		Dispatcher.dispatch({
			actionType : AppConstants.CREATE_AUTHOR,
			author :newAuthor

		});

	},

	updateAuthor :function(author){

		var updateAuthor = AuthorApi.saveAuthor(author){
			Dispatcher.dispatch({

				actionTypes:AppConstants.UPDATE_AUTHOR,
				author :updateAuthor

			});
		}

	}

};

module.exports = AuthorActions;