import React, { Component } from "react";

// Compontents
import FizzBuzzTable from './fizzBuzzTable';

class FizzBuzzContainer extends Component {

    constructor(props){
        // need the props that were passed in (props.totalNum)
        super(props);
        // start the app
        this.runFizzBuzz();
    }

    // fizz buzz checker.
    checkFizzBuzz(num) {
        if(num % 3 === 0 && num % 5 === 0) {
            return 'FizzBuzz'
        } else if ( num % 3 === 0) {
            return 'Fizz'
        } else if (num % 5 === 0) {
            return 'Buzz'
        } else {
            return num;
        }
    }

    runFizzBuzz() {
        const numToFizzBuzz = this.props.totalNum;
        let numberArray = [];

        // check if it's a Fizz or Buzz and add to numberArray
        for(let i = 1; i <= numToFizzBuzz; i++) {

            let num = i;
            let res = this.checkFizzBuzz(i);

            numberArray.push({number: num, result: res, class: res})
            
        };

        // interval timer to unshift into the array with 1 sec delay.
        let counter = 0;
        let timer = setInterval(()=> {
            let currentArray = this.state.numbers;
            this.setState({
                number: currentArray.unshift(numberArray[counter])
            });
            counter++;

            //stop the timer if we don't have a number to push.
            if(counter === numberArray.length) {
                stop();
            }
        }, 1000)

        // stop the timer
        const stop = () => {
            console.log('Stopping Timer');
            clearInterval(timer);
        }

    }

    state = {
        numbers: []
    }

    // Render call the table and render it.
    render() {
        return (
            <div>
                <h1>FizzBuzzing: {this.props.totalNum} numbers</h1>
                {
                    this.props.totalNum
                    ? <FizzBuzzTable results={this.state.numbers}/>
                    : <h1>Not starting</h1>
                }
            </div>
        );
    }
}

export default FizzBuzzContainer;