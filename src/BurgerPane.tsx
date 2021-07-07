import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'
import { ing } from './App'

interface BurgerPaneProps {
	burgerIngredients: ing[],
	clearBurger: () => void
}

const BurgerPane = (props: BurgerPaneProps) => {
	return (
		<div>
			<BurgerStack burgerIngredients={props.burgerIngredients} />
			<ClearBurger clearBurger={props.clearBurger} />
		</div>
	)
}

export default BurgerPane