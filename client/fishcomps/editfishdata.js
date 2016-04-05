//get fish from server, render form
var React = require('react');
var EditFishForm = require('./editfishform');

var EditFishData = React.createClass({
	getInitialState: function() {
	    return {
	      fishName: null,
	      fishPeopleEater: null,
	      fishColor: null,
	      fishLength: null,
	      fishImg: null,

	    }
    },

    contextTypes: {
    	sendNotification: React.PropTypes.func.isRequired
    },

    onFieldChange:function(fieldName, fieldValue){
    	this.setState({
    		[fieldName]: fieldValue
    	});
    },

	onFishSubmit: function(e){ 
		e.preventDefault();
		var fishData = {
    		name: this.state.fishName.trim(),
    		color: this.state.fishColor.trim(),
    		length: this.state.fishLength.trim(),
    		img: this.state.fishImg.trim(),
    		people_eater: this.state.fishPeopleEater
    	};

    	var fishData = fishData;
	    $.ajax({
	      url: '/api/fish/one_fish/' + this.props.id,
	      type: 'PUT',
	      data: fishData,
	    }).done((fish) => {
	      console.log('REsending fish to server', fish);
	      this.props.toggleActiveComp('fish');
	      this.context.sendNotification("You Edited that FISH!")
	    });
   
   },

    loadOneFishFromServer: function(){
	$.ajax({
			url: '/api/fish/one_fish/' + this.props.id,
			method: 'GET',		
		}).done((data) => { 
			this.setState({
			fishName: data.name,
			fishColor: data.color,
			fishPeopleEater: data.people_eater,
			fishLength: data.length,
			fishImg: data.img
		})
	  })
	},

	componentDidMount: function(){
 		this.loadOneFishFromServer();
	},

	render: function (){
		return <EditFishForm
			onFishSubmit={ this.onFishSubmit }
			onFieldChange={ this.onFieldChange.bind(this) }
			{...this.state} /> 
			
	}
});

module.exports = EditFishData;
