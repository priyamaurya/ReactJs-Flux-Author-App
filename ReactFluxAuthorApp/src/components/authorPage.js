var React = require('React');
var AuthorAction = require('../actions/authorActions');
var AuthorStore = require('../stores/authorStore');
var AuthroList = require('./AuthroList');

var AuthorPage = React.createClass({

	getInitialState:function(){

		return {
			counter :0
			authors :AuthorStore.getAllAuthors()
		};
	},

	_onChange :function(){

		this.setState({
			this.setState({counter :this.state.counter+1});
			authors :AuthorStore.getAllAuthors(); 

		})
	},
componentWillMount :function(){
	AuthorStore.addChangeListener(this._onChange);
},
componentWillUnmount :function(){
AuthorStore.removeChangeListener(this._onChange);
},


render :function(){
	return (

			<div>
			 <h1>Authors name is {this.props.name}</h1>
			 <Link to="addAuthor" className = "btn btn-default"></Link>
			 <AuthroList authors = {this.state.authors}/>
			
			</div>

		);
}

});


module.exports = AuthorPage;