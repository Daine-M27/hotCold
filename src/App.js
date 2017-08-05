import React from 'react';
import './App.css';
import GuessForm from './Components/guess-form';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            readout: 'Enter a number 1 - 100',
            randomNumber: Math.floor(Math.random() * 100) + 1,
        }
    }

    newGame() {
        this.setState({
            readout: 'Enter a number 1 - 100',
            randomNumber: Math.floor(Math.random() * 100) + 1,
        });
    }

    guess(guess) {
        guess = parseInt(guess, 10);
        if (isNaN(guess)) {
            this.setState({
                readout: 'Please enter a valid number'
            });
            return;
        }

        const difference = Math.abs(guess - this.state.randomNumber);
        console.log(guess, difference, this.state.randomNumber)

        let readout;

        if (difference >= 15) {
            readout = 'Cold';
        }
        else if (difference >= 5){
            readout = 'Getting Warm';
        }

        else if (difference >= 1) {
            readout = 'Getting Hot!';
        }
        else {
            alert('Correct, click OK to start a new game!');
            this.newGame();
        }

        this.setState({
            readout
        });

    }

  render() {
    return (
      <div className="App">
        Is your Guess Hot or Cold?
        <GuessForm readout={this.state.readout}
           onGuess={(guess) => this.guess(guess)} />
        <br />
        {/*<input type="button" value="New Game" onClick={(this.newGame())}/>*/}

      </div>
    );
  }
}

