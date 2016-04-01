// FishBox	
// 	 FishBox    	JumboTron
// 		Toggler   FishListData    FishForm Data    FishDetailsData
//					FishListData     FishForm 			FishDetails
//   FishForm

var React = require('react');
var FishListData = require ('./fishlistdata');
var FishFormData = require ('./fishformdata');
var FishDetailsData = require ('./fishdetailsdata');



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
			activeComponent: 'fish',
			activeFishId: null,
			}
	},

	getId: function(id){
		return this.setState ({ activeFishId: id, activeComponent: 'oneFish' })
	},

	showComp: function(){
		if(this.state.activeComponent === 'fish'){
			return <FishListData getId= { this.getId }/> 
		} else if (this.state.activeComponent === 'form') {
			return <FishFormData toggleActiveComp = { this.toggleActiveComp } />
		} else if (this.state.activeComponent === 'oneFish') {
			return <FishDetailsData id={ this.state.activeFishId } />
		} else {
			throw new Error("invalid activecomponant", this.state.activeComponent)
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