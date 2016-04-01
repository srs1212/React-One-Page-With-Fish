var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./navbar');
var Footer = require('./footer');
var Welcome = require('./welcome');
var Cookies = require('./cookies');
var Beer = require('./beer');
var FishApp = require('./fishapp');
var Notifier = require('./nodifier');

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
		    <Notifier>
			    <NavBar setActiveComponent={ this.setActiveComponent }/>
			  		 <div>
				    { this.showWhichComponent() }
				    </div>   
			    <Footer />	      
		  </Notifier>     
	   </div>    
     
      )
  }
})

ReactDOM.render(
  <App />, document.getElementById('app')
);
