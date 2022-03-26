import React, { Component } from 'react';
import RefsWithClassComp from './29.0.RefsWithClassComp';

class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }

    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
    
    render() {
        return (
            <div>
                <RefsWithClassComp ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}

export default FocusInput;
