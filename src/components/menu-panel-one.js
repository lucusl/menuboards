import React, { Component } from 'react';
import '../styles/menu.styles.css';
import heading1 from '../assets/images/fud-fav-heading.svg'
import json from '../data/data.json'
import MenuItem from '../components/menu-item-simple'


const api = require('../utils/api')
const data = json;





function MenuHero(props){
	return (
		<section className='hero-container'>
			<div>image</div>
			<div>
				<h3>{props.itemName}</h3>
				<p className="description"> {props.descrpt} </p>
				<h3 className="price">{props.price}</h3>
			</div>
		</section>


		)
}



class MenuPanOne extends Component {
constructor(props){
	super(props);

	this.state = {
		categorys: "",	
	};

	this.getMenuData = this.getMenuData.bind(this);

}

componentWillMount() {
		this.getMenuData();
}


getMenuData() {
	        this.setState( function (){
			return {
				categorys: data.Categorys
			}
		})

}

  render() {

  	let category = this.state.categorys[0].FuddsFavs;
  	let items = category.items;
  	let hero = category.categoryHero;
  	console.log(hero.name)

    return (
    <div className="menu-container">
    	<div className="category-container">

			<object type="image/svg+xml" data= {heading1} className="heading1">
			  Fudds favs  
			</object>

			<MenuHero itemName={hero.name} descrpt={hero.desc} price={hero.price}  />

			{items.map((item) =>{
				return (
					<MenuItem key={items.indexOf(item)}itemName={item.name} descrpt={item.desc} price={item.price} Cals=" " /> 

					)
				})}
	   
    	</div>
    </div>
    );
  }
}


export default MenuPanOne;
