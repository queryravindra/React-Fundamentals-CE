import React, { Component } from 'react';

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ravindra'
      }
      console.log('LifecycleB Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromprops');
        return null;
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate');
    }
    
    render() {
        console.log('LifecycleB render');
        return (
            <div>LifecycleB</div>
        );
    }
}

export default LifecycleB;


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