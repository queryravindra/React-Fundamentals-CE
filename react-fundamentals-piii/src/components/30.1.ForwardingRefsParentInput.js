import React, { Component } from 'react';
import ForwardingRefsInput from './30.0.ForwardingRefsInput';

class ForwardingRefsParentInput extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <ForwardingRefsInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}

export default ForwardingRefsParentInput;
