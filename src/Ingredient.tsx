import React from 'react'

interface IngredientProps {
	ingredient: string,
	color: string
}

const Ingredient = (props: IngredientProps) => {
	return (
		<p style={{ backgroundColor: props.color }}>
			{props.ingredient}
		</p>
	)
}

export default Ingredient