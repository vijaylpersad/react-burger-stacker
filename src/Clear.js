import './App.css'
import React, { Component } from 'react';


class Clear extends Component {
    state = {  } 
    render() { 
        return (
            <button onClick={this.props.clearBurger}>Start over</button>
        );
    }
}
 
export default Clear;