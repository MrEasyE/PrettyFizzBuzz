import React, { Component } from 'react';
import './App.css';

// Components
import FizzBuzzContainer from './components/fizzBuzzContainer';

class App extends Component {

  // intial state
  state = {
    number: null
  }

  // button handler to grab number for state
  handleStart = e => {
    let FizzBuzzNumber = this.number.value;
    e.preventDefault();

    // check if we already have a number
    if(this.state.number) {
      // kill the number if we do
      console.log('Stop')
      this.setState({
        number: null
      })
    } else {
      // set the number if we don't
      console.log('Setting Number to FizzBuzz')
      this.setState({
        number: FizzBuzzNumber
      });
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* So pretty */}
          <h1 className="title">Pretty FizzBuzz</h1> 
        </header>

        <main className="App-body">
          <p>
            Welcome to Pretty FizzBuzz. Please give us a number, any number and
            we will play FizzBuzz for you. If you're unfamiliar with FizzBuzz,
            you can learn all about it{" "}
            <a
              href="https://en.wikipedia.org/wiki/Fizz_buzz"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>
            .
          </p>

          {/* this is our form for collecting and submitting the number */}

          <form name="numField" onSubmit={this.handleStart}>

            <input
              name="numberInput"
              className="numberInput"
              type="number"
              placeholder="How many numbers are we FizzBuzzing?"
              ref={number => this.number = number} // set "this.number to value in the input field. This is passed via e in handleSubmit"
              // disable the form if we're running a FizzBuzz
              disabled={
                this.state.number
                ? "disabled"
                : null
              }
            ></input>


            <button type="submit" className="startButton">
              {/* Change button text depending on context */}
              {
                this.state.number
                ? 'Stop'
                : 'FizzBuzz Me!'
              }
            </button>
          </form>

          {/* Display the FizBuzz Container once user submits a number */}

          {
            this.state.number
            ? <FizzBuzzContainer totalNum={this.state.number} />
            : <span></span>
          }
          
        </main>
      </div>
    );
  }
}

export default App;
