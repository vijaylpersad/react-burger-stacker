import React, { Component } from 'react';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

class App extends Component {

  state = {
    burgerIngredients: []
  }

  //anytime you change the state, the defining function should be in same place as state
  clearBurger = () => {
    this.setState({burgerIngredients: []})
  }


  addToBurger = (ingredient) => {
    //add selected ingredient to burgerIngredients State
    let newBurgerList = this.state.burgerIngredients
    //push new ingredient to the burger
    newBurgerList.push(ingredient)
    this.setState({burgerIngredients: newBurgerList})
  }


  render(){
    return(
      <>
      <main>
        <h1>Burgerstacker</h1>
        <IngredientList ingredients={this.props.ingredientsList} addToBurger={this.addToBurger}/>
        <BurgerPane 
          burgerIngredients = {this.state.burgerIngredients}
          clearBurger={this.clearBurger}
        />
      </main>
      </>
      
    )
  }
}

export default App;
