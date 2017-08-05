import React from 'react';
import InputForm from './input-section';

export default function GuessForm(props) {
    return (
        <div>
            <h2 id="readout">{props.readout}</h2>
            <InputForm onGuess={props.onGuess} />
        </div>
    );
}


// export default class guessForm extends React.Component {
//     // console.log(this.num);
//
//     render(){
//         return (
//             <div className="Guess-Form">
//                 <p>newtest</p>
//                 <inputform />
//             </div>
//         );
//     }
// }





