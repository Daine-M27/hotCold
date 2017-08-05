import React from 'react';



export default class InputForm extends React.Component {
    onGuess(event) {
        event.preventDefault();

        if (this.props.onGuess) {
            const value = this.input.value;
            this.props.onGuess(value);
        }
        this.input.value = '';
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <input type="text" name="userGuess" id="userGuess"
                       className="text" maxLength="3" autoComplete="off"
                       placeholder='enter a number here'
                       ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};
// export default class Form extends React.Component {
//         return (
//             <div className="form">
//                <p>stuff</p>
//              <form>
//                  <lable htmlFor="userInput">Can you guess the number?</lable>
//                  <input type="text" className="user-input" placeholder="Enter Number Here from 1 to 100" />
//                  <input type="submit" className="submit-btn" name="submit-btn" value="Submit" />
//              </form>
//             </div>
//         );
// }
