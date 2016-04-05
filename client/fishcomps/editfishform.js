var React = require('react');

function EditFishForm(props){
  return (
		<div>
			<h3>CREATE A FISH </h3>	
			<form onSubmit = { props.onFishSubmit } >
				  <fieldset className ="form-group">
				    <label>NAME YOUR FISH</label>
				    <input onChange= { (event) => props.onFieldChange('fishName', event.target.value) } value= {props.fishName} type="text" className ="form-control"  placeholder="Name" />
				  </fieldset>
				  <fieldset className ="form-group">
				    <label>WHAT IS THE AVERAGE LENGTH OF YOUR FISH</label>
				    <input onChange = { (event) => props.onFieldChange('fishLength', event.target.value) } value={props.fishLength} type="text" className ="form-control"  placeholder="inches or feet" />
				  </fieldset>

				   <fieldset className ="form-group">
				    <label>WHAT IS THE COLOR OF YOUR FISH</label>
				    <input onChange = { (event) => props.onFieldChange('fishColor', event.target.value) } value={props.fishColor}  type="text" className ="form-control"  placeholder="color" />
				  </fieldset>


				<fieldset className="form-group">
                    <label htmlFor="exampleSelect1">Eats People?</label>
                    <select onChange={ (event) => props.onFieldChange('fishPeopleEater', event.target.value) } value={ props.fishPeopleEater } type="text" className="form-control" >
                     <option> Select </option>
                     <option value={true}>yes</option>
                     <option value={false}>no</option>
                     </select>
                  </fieldset>


				  <fieldset className ="form-group">
				    <label>URL WITH A PICTURE TO YOUR FISH</label>
				    <input onChange = { (event) => props.onFieldChange('fishImg', event.target.value)}  value={props.fishImg} type="text" className ="form-control"  placeholder="Another input" />
				  </fieldset>

				  <button type="submit" className = "btn btn-info" >Edit Fish</button>
			</form>
		</div>
			);
}

module.exports = EditFishForm;
