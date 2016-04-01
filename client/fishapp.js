//FishApp
	//JumboTron
	//Toggle Fish
	//Display Fish
	//Edit Fish
var React = require('react');
var FishBox = require('./fishcomps/fishbox');
var Loader = require('./loader');
var FishJumboTron = require('./fishcomps/fishjumbotron');


var FishApp = React.createClass({


	render: function (){
			return (
				<div>
				<FishJumboTron/>
				<FishBox />
				</div>
				)

	}
});

module.exports = FishApp;