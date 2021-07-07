import React from 'react'
import Ingredient from './Ingredient'
import { ing } from './App'

interface IngListProps {
	ingredients: ing[],
	addToBurger: (e: React.MouseEvent<HTMLElement>) => void
}

const IngredientList = (props: IngListProps) => {
	// take array of props and use .map
	let ingredientComponents = props.ingredients.map((item, index) => (
		<li onClick={(e) => props.addToBurger(e)} key={index}>
			<Ingredient ingredient={item.name} color={item.color} />
		</li>
	))

	return (
		<ul>
			{ingredientComponents}
		</ul>
	)
}

export default IngredientList