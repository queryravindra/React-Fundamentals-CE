// rce
import React, { Component } from 'react';

class SetStateCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    // increment() {
    //     // UI will not render whenever state is changing(this is the reason we should not change state directly) 
    //     // but console will show update value
    //     // this.state.count = this.state.count + 1

    //     // when you follow below method the state will update but console(below line) the value will be zero(0) 
    //     // i.e., the console value will be one lessthan rendered value(console value = render value - 1)
    //     // this is becz calls to setState is asynchronous
    //     this.setState({
    //         count: this.state.count + 1
    //     }, () => {console.log('Callback value:', this.state.count)});
    //     console.log(this.state.count)  // this is called before the state is actually set

    //     // Whenever you need to execute some code after the state has been changed do not place that code write after the setState
    //     // method instead place that code within the callback function that is passed as second parameter to the setState method
    // }

    increment() {
        this.setState((prevState, props) => ({
            // count: prevState.count + props.addValue
            count: prevState.count + 1
        }));
        console.log(this.state.count)
    }

    incrementFive() {
        // this scenario leads to value increment by 1 instead of changing to 5
        // this behaviour is becz React may group multiple setState calls into a single update for better performance
        // so what happens in our scenario is that all the five setState calls are done in one single go and updated value
        // does not carry over between the different calls
        // so whenever you update the state based on the prev state we need to pass function as an argument to setState method
        // instead of passing an object(second increment function)
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
      return (
            <div>
                <div>Count - {this.state.count}</div>
                {/* <button onClick={() => this.increment()}>Increment</button> */}
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
      );
    }
}

export default SetStateCounter;


