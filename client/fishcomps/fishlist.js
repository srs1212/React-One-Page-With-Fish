var React = require('react');

var FishCard = require('./fishcard');
var FishForm = require('./fishform');

var FishList = React.createClass({
	render: function (){
		var fishList = this.props.fishArray.map(function(item){
			return (
				<FishCard
				name ={ item.name }
				color ={ item.color }
				people_eater ={ item.people_eater }
				length ={ item.length }
				img ={ item.img } />
			);
		})
		return (
			<div className = "flex-fish">
				{ fishList }
			</div>
			)
	}
});

module.exports = FishList;