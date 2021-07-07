import React from 'react'
import Ingredient from './Ingredient'
import { ing } from './App'

interface BurgerStackProps {
	burgerIngredients: ing[]
}

const BurgerStack = (props: BurgerStackProps) => {
	let burgerIngredients = [...props.burgerIngredients].reverse().map((item, index) => (
		<li key={index}>
			<Ingredient ingredient={item.name} color={item.color} />
		</li>
	))

	return (
		<ul style={{ marginBottom: "1em" }}>
			{burgerIngredients}
		</ul>
	)
}

export default BurgerStack