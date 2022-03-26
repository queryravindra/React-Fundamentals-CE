import React, { Component } from 'react';
import UserContext from './40.0.userContext';
import ComponentF from './40.1.ComponentF';

class ComponentE extends Component {

  static contextType = UserContext

  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    )
  }
}

// contextType
// ComponentE.contextType = UserContext

export default ComponentE;

// If your component supports the public class syntax you can replace ComponentE.contextType with
// static contextType = UserContext

// you know think this is much simpler thean consumer component syntax, why just should not stick to contextType
// there are two limitations
// 1.Only works with class components
// 2.you can subscribe to single context using contextType if you need morethan one context consumer component is suitable