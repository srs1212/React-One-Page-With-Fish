// FishBox	
// 	 FishList
// 		FishCard
//   FishForm

var React = require('react');
var FishList = require('./fishlist');
var FishForm = require ('./fishform');

var Toggler = React.createClass({
	render: function (){
		return (
			<div className ="btn-group marginbottom" data-toggle="buttons">
			  <button onClick = {this.props.toggleActiveComp.bind(null, 'fish')}> Fish Display </button>
			  <button onClick = {this.props.toggleActiveComp.bind(null, 'form')}> Create a Fish  </button>
			</div>
			);
	}
});

var FishBox = React.createClass({
	getInitialState: function(){
		return {
			activeComponent: 'fish'
			}
	},
	showComp: function(){
		if(this.state.activeComponent === 'fish'){
			return <FishList fishArray= { this.props.fishArray } />
		} else if (this.state.activeComponent === 'form') {
			return <FishForm onFishSubmit={this.props.onFishSubmit} />
		} else {
			return <FishList fishArray= { this.props.fishArray } />
		}
	
	},
	toggleActiveComp: function(name){
		this.setState ({ activeComponent: name})
	},

	render: function (){
		return (
			<div className = "container marginbottom">
				<Toggler toggleActiveComp = {this.toggleActiveComp }/>
				{ this.showComp() }
			</div>


			);
	}
});

module.exports = FishBox;