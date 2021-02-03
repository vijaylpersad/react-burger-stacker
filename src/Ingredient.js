import React, { Component } from 'react'

class Ingredient extends Component {
    render() {
        return (
            <li onClick={(e) => this.props.addToBurger(e)} style={{backgroundColor: this.props.color}} key={this.props.key}>
                {this.props.ingredient}
            </li>
        )
    }
}

export default Ingredient