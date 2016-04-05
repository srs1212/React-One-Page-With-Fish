var React = require('react');
var FishForm = require ('./fishform');
//Posting new Fish
var FishFormData = React.createClass({
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

    onNameChange: function(event){
    	this.setState({ fishName: event.target.value})
    },

    onPeopleEaterChange: function(event){
    	this.setState ({ fishPeopleEater: event.target.value})
    },

    onColorChange: function(event){
    	this.setState ({ fishColor: event.target.value})
    },

    onLengthChange: function(event){
    	this.setState ({ fishLength: event.target.value})
    },
	
	onImageChange: function(event){
    	this.setState ({ fishImg: event.target.value})

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
    	var self = this;
    	var fishData = fishData;
	    $.ajax({
	      url: '/api/fish',
	      type: 'POST',
	      data: fishData,
	    }).done(function(fish){
	      console.log('sending fish to server', fish)
	      self.props.toggleActiveComp('fish');
	      self.context.sendNotification("You Added a cool FISH!")
	    });
   
   },

	render: function(){
		return (
			<FishForm
			onFishSubmit = { this.onFishSubmit }
			
			onNameChange = { this.onNameChange }
			onPeopleEaterChange = { this.onPeopleEaterChange }
			onColorChange = { this.onColorChange }
			onLengthChange = { this.onLengthChange }
			onImageChange = { this.onImageChange }
			/>
			
		)
		
	}
});

module.exports = FishFormData;