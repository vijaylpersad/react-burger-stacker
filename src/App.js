import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const ingredients = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]

class App extends Component {
  state = {
    burgerIngredients: []
  }

  addToBurger = (e) => {
    console.log("THIS RAN")
    let currentBurger = this.state.burgerIngredients
    currentBurger.push(e.target.innerText)

    this.setState({
      burgerIngredients: currentBurger
    })
  }

  render() {
    return (
      <div>
        <IngredientList ingredients={ingredients} addToBurger={this.addToBurger} />
        <BurgerPane />
        {this.state.burgerIngredients}
      </div>
    )
  }
}

export default App
