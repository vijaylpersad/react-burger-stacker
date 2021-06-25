import React from 'react'
import Ingredient from './Ingredient'


const BurgerStack = (props) => {
        let burgerIngredients = [...props.burgerIngredients].reverse().map((item, index) => (
            <li key={index}>
                <Ingredient ingredient={item.name} color={item.color}/>
            </li>
        ))

        return (
            <ul style={{marginBottom: "1em"}}>
                {burgerIngredients}
            </ul>
        )
}

export default BurgerStack