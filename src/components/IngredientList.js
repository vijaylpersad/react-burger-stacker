import React, { Component } from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {
    render() {
        let list = this.props.ingredients.map(ingredient => <Ingredient ingredient={ingredient} />)
        return (
            <section className='pane'>
                <h1>INGREDIENT LIST</h1>
                <ul className="ingredient-list">
                    {list}
                </ul>
            </section>
        )
    }
}

export default IngredientList