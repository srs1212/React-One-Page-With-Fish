var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./navbar');
var Footer = require('./footer');
var Welcome = require('./welcome');
var Cookies = require('./cookies');
var Beer = require('./beer');
var FishApp = require('./fishapp');

require('./stylesheets/main.scss');


var App = React.createClass({
	getInitialState: function(){
		return {
			activeComponent: 'welcome'
		}
	},
	setActiveComponent: function(compName){
		this.setState({
			activeComponent: compName
		})
	},
	showWhichComponent: function(){
		switch(this.state.activeComponent) {
		    case 'welcome':
		        return <Welcome/>
		        break;
		    case 'cookies':
		        return <Cookies/>
		        break;
		    case 'beer':
		        return <Beer/>
		        break;
		    case 'fish':
		        return <FishApp/>
		        break;
		    default:
		        return <Welcome/>
		};
		
	},

  render: function() {
    return (
	   <div>
		    <div>
		    <NavBar setActiveComponent={ this.setActiveComponent }/>
		    </div>
			    <div>
			    { this.showWhichComponent() }
			    </div>
		    <div>
		    <Footer />
		    </div>   
	   </div>    
     
      )
  }
})

ReactDOM.render(
  <App />, document.getElementById('app')
);
