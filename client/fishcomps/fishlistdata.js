var React = require('react');
var Loader = require('../loader');
var FishList = require('./fishlist');
var FishListData = React.createClass({
	
	getInitialState: function(){
		return {
			allFish: null 
		}
	},

	loadAllFishFromServer: function() {
   	$.ajax({
     url: '/api/fish' ,
     method: 'GET'
   	}).done((data) => this.setState({ allFish: data }));

 	},

	componentDidMount: function(){
		this.loadAllFishFromServer();
	},
	render: function (){
		return this.state.allFish ? <FishList fishArray = { this.state.allFish }/> : <Loader />
	}
});

module.exports = FishListData;
