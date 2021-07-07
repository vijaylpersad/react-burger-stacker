import React from 'react'

interface ClearBurgerProps {
	clearBurger: () => void
}

const ClearBurger = (props: ClearBurgerProps) => {
	return (
		<button onClick={() => props.clearBurger()}>Clear Burger Stack</button>
	)
}

export default ClearBurger