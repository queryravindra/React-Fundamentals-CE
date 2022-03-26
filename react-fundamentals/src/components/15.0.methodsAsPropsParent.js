// What if child component want to communicate with parent component, strangely we still use props but this time
// we pass in a reference to a method as props to child component

import React, { Component } from 'react';
import MethodsAsPropsChildren from './15.1.methodsAsPropsChildren';

class MethodsAsPropsParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

      this.greetParent = this.greetParent.bind(this);
    }

    // greetParent() {
    //     alert(`Hello ${this.state.parentName}`);
    // }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }
    
    render() {
        return (
            <div>
                <MethodsAsPropsChildren greetHandler={this.greetParent} />
            </div>
        );
    }
}

export default MethodsAsPropsParent;
