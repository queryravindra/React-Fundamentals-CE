import React, { Component } from 'react';

class TernaryCondition extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
    render() {
        return this.state.isLoggedIn ? (
            <div>Welcome Ravindra</div>
        ) :  (
            <div>Welcome Guest</div>
        )
    }
}

export default TernaryCondition;
