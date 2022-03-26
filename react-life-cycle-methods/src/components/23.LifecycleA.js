import React, { Component } from 'react';
import LifecycleB from './23.LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ravindra'
      }
      console.log('LifecycleA Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromprops');
        return null;
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount');
    }
    
    render() {
        console.log('LifecycleA render');
        return (
            <div>
                <div>LifecycleA</div>
                <LifecycleB />
            </div>
        );
    }
}

export default LifecycleA;


// Order of console (without child component)

/**
 * 1.LifecycleA Constructor
 * 2.LifecycleA getDerivedStateFromprops
 * 3.LifecycleA render
 * 4.LifecycleA componentDidMount
 */

// Order of console (withchild component)

/**
 * 1.LifecycleA Constructor
 * 2.LifecycleA getDerivedStateFromprops
 * 3.LifecycleA render
 * 4.LifecycleB Constructor
 * 5.LifecycleB getDerivedStateFromprops
 * 6.LifecycleB render
 * 7.LifecycleB componentDidMount
 * 8.LifecycleA componentDidMount
 */


// Note: In render() -> children component lifecycle methods are also executed
// Note: Invoked immediately after a component and all its children components have been rendered to the DOM