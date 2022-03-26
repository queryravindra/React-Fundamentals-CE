import React, { Component } from 'react';
import LifecycleB from './24.LifecycleB';

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

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'Phanindra'
        })
    }
    
    render() {
        console.log('LifecycleA render');
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
        );
    }
}

export default LifecycleA;


// Order of console (withchild component after clicking button(i.e.,updating state))

/**
 * 1.LifecycleA getDerivedStateFromprops
 * 2.LifecycleA shouldComponentUpdate
 * 3.LifecycleA render
 * 4.LifecycleB getDerivedStateFromprops
 * 5.LifecycleB shouldComponentUpdate
 * 6.LifecycleB render
 * 7.LifecycleB getSnapshotbeforeUpdate
 * 8.LifecycleA getSnapshotbeforeUpdate
 * 9.LifecycleB componentDidUpdate
 * 10.LifecycleA componentDidUpdate
 */


// Note: In render() -> children component lifecycle methods are also executed
// Note: Invoked immediately after a component and all its children components have been rendered to the DOM