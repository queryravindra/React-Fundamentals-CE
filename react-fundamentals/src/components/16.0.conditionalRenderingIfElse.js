import React, { Component } from 'react';

class ConditionalRenderingIfElse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
    render() {
        if(this.state.isLoggedIn) {
            return (
                    <div>Welcome Ravindra</div>
            );
        } else {
            return (
                    <div>Welcome Guest</div>
            );
        }
    }
}

export default ConditionalRenderingIfElse;
