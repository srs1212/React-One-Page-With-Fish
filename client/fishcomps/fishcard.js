var React = require('react');
function FishCard (props) {
		return (
			<div className ="card fishcard">
  				<img className ="card-img-top fishpic" src= { props.img } />
				  <div className ="card-block marginbottom-sm">
			  		  <h4 className ="card-title"> { props.name } </h4>
			   		  <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    	 
				    		<div className ="marginbottom-sm"><button onClick = {props.getId.bind(null, 'showOne', props.id)} className ="btn btn-primary">Go Fish</button></div>
				    		<div className = "marginbottom-sm"><button onClick = { props.getId.bind(null, 'editOne', props.id)} className ="btn btn-primary">Edit Fish</button></div>
				    		<div className = "marginbottom-sm"><button onClick = {props.deleteFish.bind(null, props.id)} className ="btn btn-primary">Delete Fish</button></div>

			  	 		
			  	  </div>
			</div>
			);
	
};

module.exports = FishCard;

