var React = require('react');

var FishCard = require('./fishcard');

function FishList(props){
		var allFish = props.fishArray.map(item =>{
			return (
				<FishCard
				getId = { props.getId }
				deleteFish = { props.deleteFish }
				id = { item._id }
				key = { item._id }
				name ={ item.name }
				color ={ item.color }
				people_eater ={ item.people_eater }
				length ={ item.length }
				img ={ item.img } />
			);
		});
		return (
			<div className = "flex-fish">
				{ allFish }
			</div>
			)
	};

FishList.propTypes = {
	fishArray: React.PropTypes.array.isRequired

};

module.exports = FishList;