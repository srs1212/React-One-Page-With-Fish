var React = require('react');

var Cookies = React.createClass({
	render: function (){
		return (
			<div className="jumbotron">
			  <h1 className="display-3">COOKIES</h1>
			  <p className="lead">This is my super badass Toggle stuff about cookies</p>
			  <hr className="m-y-2"></hr>
			  <p>Phasellizzle my shizz volutpizzle tellus. </p>
			  <p className="lead">
			    <a className="btn btn-primary btn-lg" href="#" role="button">COOKIES</a>
			  </p>

			</div>
			);
	}
});

module.exports = Cookies;