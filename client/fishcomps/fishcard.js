var React = require('react');
function FishCard (props) {
		return (
			<div className ="card fishcard">
  				<img className ="card-img-top fishpic" src= { props.img } />
				  <div className ="card-block">
			  		  <h4 className ="card-title"> { props.name } </h4>
			   		  <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    		<button onClick = {props.getId.bind(null, props.id)} className ="btn btn-primary">Go Fish</button>
			  	  </div>
			</div>
			);
	
};

module.exports = FishCard;

