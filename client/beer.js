var React = require('react');

var Beer = React.createClass({
	render: function (){
		return (
			<div className="jumbotron">
			  <h1 className="display-3">BEER</h1>
			  <p className="lead">This is my super badass Toggle stuff about cookies</p>
			  <hr className="m-y-2"></hr>
			  <p>Phasellizzle my shizz volutpizzle tellus. </p>
			  <p className="lead">
			    <a className="btn btn-primary btn-lg" href="#" role="button">BEER</a>
			  </p>

			</div>
			);
	}
});

module.exports = Beer;