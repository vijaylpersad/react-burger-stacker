import './App.css'
import React, { Component } from 'react';
import Ingredient from './Ingredient'
import Clear from './Clear'

class BurgerPane extends Component {
    state = {  } 
    render() { 
        const burger = this.props.burgerIngredients.map(layer=>{
            return <Ingredient ingredient={layer} />
        })
        return (
        <section className="burger-pane">
            <h1>burger pane</h1>
            {burger}
            <Clear clearBurger={this.props.clearBurger}/>
        </section>
        );
    }
}
 
export default BurgerPane;