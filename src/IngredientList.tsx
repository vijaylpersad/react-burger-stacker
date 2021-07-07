import * as React from 'react'
import { string } from 'yargs'
import Ingredient from './Ingredient'

type IngListProps = {

}

const IngredientList: React.FC<Props> = (props: { ingredients: object[]; addToBurger: (arg0: React.MouseEvent<HTMLLIElement, MouseEvent>) => void }): JSX.Element => {
	// take array of props and use .map
	let ingredientComponents = props.ingredients.map((item: object, index: number) => (
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