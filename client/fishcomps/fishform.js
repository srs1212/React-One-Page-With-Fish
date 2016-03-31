var React = require('react');

var FishForm = React.createClass({
	getInitialState: function() {
    return {
      fishName: null,
      fishPeopleEater: null,
      fishColor: null,
      fishLength: null,
      fishImg: null,

    	}
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

    formSubmit: function(event){
    	event.preventDefault();
    	var fishData = {
    		name: this.state.fishName.trim(),
    		color: this.state.fishColor.trim(),
    		length: this.state.fishLength.trim(),
    		img: this.state.fishImg.trim(),
    		people_eater: this.state.fishPeopleEater
    	};
    	this.props.onFishSubmit(fishData);
    	this.setState({
    		fishName:'', fishColor:'', fishLength:'', fishImg:'', fishPeopleEater: null
    	});
    },
	
	render: function (){
		return (
		<div>
			<h3>CREATE A FISH </h3>	
			<form onSubmit = {this.formSubmit} >
				  <fieldset className ="form-group">
				    <label>NAME YOUR FISH</label>
				    <input onChange= { this.onNameChange } value = {this.state.fishName} type="text" className ="form-control"  placeholder="Name" />
				  </fieldset>
				  <fieldset className ="form-group">
				    <label>WHAT IS THE AVERAGE LENGTH OF YOUR FISH</label>
				    <input onChange = { this.onLengthChange } value = {this.state.fishLength} type="text" className ="form-control"  placeholder="inches or feet" />
				  </fieldset>

				   <fieldset className ="form-group">
				    <label>WHAT IS THE COLOR OF YOUR FISH</label>
				    <input onChange = { this.onColorChange } value = {this.state.fishColor} type="text" className ="form-control"  placeholder="color" />
				  </fieldset>


				<fieldset className="form-group">
                    <label htmlFor="exampleSelect1">Eats People?</label>
                    <select onChange={ this.onPeopleEaterChange } type="text" className="form-control" >
                     <option value= { null } > Select </option>
                     <option value={ true }>yes</option>
                     <option value={ false }>no</option>
                     </select>
                  </fieldset>


				  <fieldset className ="form-group">
				    <label>URL WITH A PICTURE TO YOUR FISH</label>
				    <input onChange = { this.onImageChange }  value = {this.state.fishImg } type="text" className ="form-control"  placeholder="Another input" />
				  </fieldset>

				  <button type="submit" className = "btn btn-info" >Swim</button>
			</form>
		</div>
			);
	}
});

module.exports = FishForm;