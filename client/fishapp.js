//FishApp
	//JumboTron
	//Toggle Fish
	//Display Fish
	//Edit Fish
var React = require('react');
var FishBox = require('./fishcomps/fishbox');
var Loader = require('./loader')
var FishJumboTron = require('./fishcomps/fishjumbotron');


var FishApp = React.createClass({

	onFishSubmit: function(fishData){
		console.log("Fish coming from App", fishData);
    	var fishData = fishData;
	    $.ajax({
	      url: '/api/fish',
	      type: 'POST',
	      data: fishData,
	    }).done(function(fish){
	      console.log('sending fish to server', fish)
	      this.loadAllFishFromServer()
	    }.bind(this))
   },

	render: function (){
			return (
				<div>
				<FishJumboTron/>
				<FishBox onFishSubmit={this.onFishSubmit} />
				</div>
				)

	}
});

module.exports = FishApp;