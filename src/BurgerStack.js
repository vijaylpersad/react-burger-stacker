import React, { Component } from 'react'
import Ingredient from './Ingredient'


class BurgerStack extends Component {
    render() {
        // call .map on our passed props array
        let burgerIngredients = this.props.burgerIngredients.reverse().map((item, index) => (
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
}

export default BurgerStack