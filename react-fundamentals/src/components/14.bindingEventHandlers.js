import React, { Component } from 'react';

class BindingEventHandlers extends Component {
    // rconst
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

    // 3rd Way
    //   this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     });
    //     console.log(this);  // 'undefined' before binding
    //     // this keyword is undefined in event handler and that is the reason event binding is necessary in react class components
    // }

    // 4th Way
    clickHandler = () => {
        this.setState({
            message: 'Goodybye!'
        });
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickhandler}>Click</button> */}
                {/* 1st Way */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* 2nd Way */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}

                {/* 3rd Way */}
                {/* 4th Way */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default BindingEventHandlers;

// variants of binding event handlers

/**
 * 1.use the bind keyword and bind the handler in render method
 * clickHandler() {
        this.setState({
            message: 'Goodbye!'
        });
    }

    <button onClick={this.clickHandler.bind(this)}>Click</button>

    // Although this option works perfectly fine every update to the state will cause a component to re-render
    // this intend will generate a brand new event handler on every render.Although it impact on performances not severe 
    // in smaller applications, it could trouble some larger applications and components that contain nested children components
    // 
 */

/** 
 * 2.use Arrow functions in render method
 * clickHandler() {
        this.setState({
            message: 'Goodbye!'
        });
    }
 * <button onClick={() => this.clickHandler()}>Click</button>

    // probably the easiest way to pass parameters
    // But similar to the first approach this also has performance implifications in some scenarios
    // If your code doesn't involve re-render nested children this approach is still available approach
*/

/**
 * 3.This approach deals with binding the event handler in constructor as opposed to binding in the render method
 * this approach in official react documents and you can see in most of the cases
 * 
 * constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      this.clickHandler = this.clickHandler.bind(this);
    }

    <button onClick={this.clickHandler}>Click</button>
 */

/**
* 4.Use an Arrow function as class property

    clickHandler = () => {
        this.setState({
            message: 'Goodybye!'
        });
    }

    <button onClick={this.clickHandler}>Click</button>
*/

// Note: React document suggests either approach no.3 or approach no.4 but app.no4 is in experimental stage consider approach.no3 is best
// approach now
