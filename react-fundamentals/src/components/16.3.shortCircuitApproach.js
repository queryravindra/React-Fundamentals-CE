import React, { Component } from 'react';

class ShortCircuitApproach extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
    render() {
        return this.state.isLoggedIn && <div>Welcome Ravindra</div>
    }
}

export default ShortCircuitApproach;
