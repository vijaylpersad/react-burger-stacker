import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const ingredientData = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]

const App = () => {

	const [myBurger, setMyBurger] = useState([]);
	
	const addToBurger = (e) => {
		let newIngredient = {
			name: e.target.innerText,
			color: e.target.style.backgroundColor
		}
		setMyBurger([
			...myBurger,
			newIngredient
		])
	}

	const clearBurger = () => {
		setMyBurger([])
	}

	return (
		<div style={{display: "flex", alignItems: "flex-end"}}>
		<IngredientList ingredients={ingredientData} addToBurger={addToBurger} />
		<BurgerPane burgerIngredients={myBurger} clearBurger={clearBurger} />
		</div>
	)
}

export default App
