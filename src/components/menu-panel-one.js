import React, { Component } from 'react';
import '../styles/menu.styles.css';

function MenuItem(props){
	let isDescription = checkDescription(props.descrpt);
	return(
		<div className= {"item-sction-container " + (!isDescription ? 'pad' :'') }> 
			<div className="item-container" >
				<h3>{props.itemName}</h3>
				<p>  </p>
				<h3 className="price">{props.price}</h3>
			</div>
			{  isDescription ? <p className="description"> {props.descrpt} </p> : '' }
		</div>
		)

}

function checkDescription(description){
	if(description.length > 1 ){
		console.log(description.length)
		return true
	} else {
		console.log(description.length)
		return false
	}
}




class MenuPanOne extends Component {
  render() {
    return (
    <div className="menu-container">	
    	<MenuItem itemName="Veggie Burger" descrpt="" price="7.90" Cals=" " /> 
       	<MenuItem itemName="Veggie Burger" descrpt="this is a description" price="7.90" Cals=" " /> 
    	<MenuItem itemName="Veggie Burger" descrpt="this is a description" price="7.90" Cals=" " /> 
    </div>
    );
  }
}


export default MenuPanOne;
