import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

class App extends Component {
  // btw adding data, prop handling, state, functions, etc.

  render() {
    return (
      <div>
        <IngredientList />
        <BurgerPane />
      </div>
    )
  }
}

export default App
