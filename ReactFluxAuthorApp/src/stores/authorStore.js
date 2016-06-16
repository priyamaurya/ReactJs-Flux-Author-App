var Dispatcher = require('../dispatcher/appDispatcher');
var AppConstants = require('../constants/actionConstant');
var EventEmiiter = require('events').EventEmiiter;
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _authors = [];

var AuthorStore = assign({},EventEmiiter.prototype,{

	addChangeListener :function(callback){
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener:function(callback){
		this.removeListener(CHANGE_EVENT,callback);
	},

	emitChange:function(){
		this.emit(CHANGE_EVENT);
	},

	getAllAuthors:function(){
		return _authors;
	},

	getAuthorById :function(){
		return _.find(_authors, {id:id});
	}
	

});

Dispatcher.register(function(action){

	switch(action.actionType){
		case AppConstants.INITIALIZE:
			_authors = action.initData.authors;
			AuthorStore.emitChange();
			break;

      case AppConstants.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;
      default :
      //nothing to do 

	}
});

module.exports = AuthorStore;