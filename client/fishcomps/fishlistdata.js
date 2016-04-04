var React = require('react');
var Loader = require('../loader');
var FishList = require('./fishlist');
var FishListData = React.createClass({
	
	getInitialState: function(){
		return {
			allFish: null 
		}
	},

	 contextTypes: {
    	sendNotification: React.PropTypes.func.isRequired
    },

	deleteFish(id) {
		var self= this;
		if(confirm("Really?? Delete me?")){
		$.ajax({
			url: '/api/fish/one_fish/' + id,
			method: 'DELETE'			
		}).done(function(){   
			self.loadAllFishFromServer();
			self.context.sendNotification("You Deleted a FISH! Hopefully it's not extinct!")
		})
	   }
	},

	loadAllFishFromServer: function() {
	   	$.ajax({
	     url: '/api/fish' ,
	     method: 'GET'
	   	}).done(data => this.setState({ allFish: data }));
	},

	componentDidMount: function(){
		this.loadAllFishFromServer();
	},
	render: function (){
		return this.state.allFish ? <FishList getId = {this.props.getId } fishArray = { this.state.allFish } deleteFish={ this.deleteFish } /> : <Loader />
	}
});

module.exports = FishListData;
