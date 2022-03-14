// import React, { Component } from 'react';


// class Ingredient extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <div className="ingredient" 
//             onClick={
//                     ()=>{this.props.addToBurger(this.props.ingredient)}
//                 }> 
// {/* wrap invocation in definition so function ^ does not run immediately 1928312893 times */}
//                     <p>{this.props.ingredient.name}</p>
//             </div>
            
//         );
//     }
// }
 
// export default Ingredient;

export default function Ingredient(props) {
    return (
        <div className="ingredient" 
            onClick={
                ()=>{props.addToBurger(props.ingredient)}
            }> 
{/* wrap invocation in definition so function ^ does not run immediately 1928312893 times */}
            <p>{props.ingredient.name}</p>
        </div>
    )
}