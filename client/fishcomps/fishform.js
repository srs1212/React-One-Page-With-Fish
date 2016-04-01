var React = require('react');

function FishForm(props){
  return (
		<div>
			<h3>CREATE A FISH </h3>	
			<form onSubmit = { props.onFishSubmit } >
				  <fieldset className ="form-group">
				    <label>NAME YOUR FISH</label>
				    <input onChange= { props.onNameChange }  type="text" className ="form-control"  placeholder="Name" />
				  </fieldset>
				  <fieldset className ="form-group">
				    <label>WHAT IS THE AVERAGE LENGTH OF YOUR FISH</label>
				    <input onChange = { props.onLengthChange }  type="text" className ="form-control"  placeholder="inches or feet" />
				  </fieldset>

				   <fieldset className ="form-group">
				    <label>WHAT IS THE COLOR OF YOUR FISH</label>
				    <input onChange = { props.onColorChange }  type="text" className ="form-control"  placeholder="color" />
				  </fieldset>


				<fieldset className="form-group">
                    <label htmlFor="exampleSelect1">Eats People?</label>
                    <select onChange={ props.onPeopleEaterChange } type="text" className="form-control" >
                     <option> Select </option>
                     <option>yes</option>
                     <option>no</option>
                     </select>
                  </fieldset>


				  <fieldset className ="form-group">
				    <label>URL WITH A PICTURE TO YOUR FISH</label>
				    <input onChange = { props.onImageChange }  type="text" className ="form-control"  placeholder="Another input" />
				  </fieldset>

				  <button type="submit" className = "btn btn-info" >Swim</button>
			</form>
		</div>
			);
}



module.exports = FishForm;