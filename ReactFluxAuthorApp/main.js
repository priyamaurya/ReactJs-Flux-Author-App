var React = require('react');
var InitializeAction = require('./actions/intiliseAuthorAction');
var AuthorPage = require('../components/authorPage');

InitializeAction.intiApp();
React.render(<AuthorPage name = "chintu"/>,document.getElementById('app'));