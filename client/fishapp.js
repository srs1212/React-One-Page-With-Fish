//FishApp
	//JumboTron
	//Toggle Fish
	//Display Fish
	//Edit Fish
var React = require('react');
var FishBox = require('./fishcomps/fishbox');
var JumboTron = React.createClass({
	render: function (){
		return (
			<div className="jumbotron">
			  <h1 className="display-3">FISH</h1>
			  <p className="lead">This is my super badass Toggle stuff about fish</p>
			  <hr className="m-y-2"></hr>
			  <p>Phasellizzle my shizz volutpizzle tellus. </p>
			  <p className="lead">
			    <a className="btn btn-primary btn-lg" href="#" role="button">FISH</a>
			  </p>

			</div>
			);
	}
});



var Loader = React.createClass({
	render: function (){
		return (
			<div>
	       		<i className="fa-spin fa fa-spinner fa-6 fa-spin loader"></i>
	    	</div>
		);
	}
});

var FishApp = React.createClass({
	getInitialState: function(){
		return {
			fishArray: null
		}
	},

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

	loadAllFishFromServer: function(){
		var self=this;
		$.ajax({
			url: '/api/fish',
			method: 'GET',
		}).done(function(data){
			self.setState ({fishArray: data})
		})
	},

	componentDidMount: function(){
		this.loadAllFishFromServer();
	},
	render: function (){
		if(this.state.fishArray){
			return (
				<div>
				<JumboTron/>
				<FishBox onFishSubmit={this.onFishSubmit} fishArray = { this.state.fishArray }/>
				</div>
			)
		} else {
			return <Loader/>	
		}	
	}
});

module.exports = FishApp;