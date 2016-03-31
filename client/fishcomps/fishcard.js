var React = require('react');
var FishCard = React.createClass({
	render: function (){
		return (
			<div className ="card fishcard">
  				<img className ="card-img-top fishpic" src= { this.props.img } />
				  <div className ="card-block">
			  		  <h4 className ="card-title"> { this.props.name } </h4>
			   		  <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    		<a href="#" className ="btn btn-primary">Button</a>
			  	  </div>
			</div>
			);
	}
});

module.exports = FishCard;