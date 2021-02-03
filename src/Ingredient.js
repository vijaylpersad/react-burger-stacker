import React, { Component } from 'react'

class Ingredient extends Component {
    render() {
        return (
            <p style={{backgroundColor: this.props.color}} key={this.props.key}>
                {this.props.ingredient}
            </p>
        )
    }
}

export default Ingredient