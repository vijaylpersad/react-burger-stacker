import React, { Component } from 'react'

class Ingredient extends Component {
    render() {
        return (
            <li backgroundColor={this.props.color} key={this.props.key}>
                {this.props.ingredient}
            </li>
        )
    }
}

export default Ingredient