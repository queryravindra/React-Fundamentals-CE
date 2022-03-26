import React, { Component } from 'react';
import { UserConsumer } from './39.1.userContext';

class ComponentF extends Component {
  render() {
    return (
        <UserConsumer>
          {
            username => {
              return <div>Hello {username}</div>
            }
          }
        </UserConsumer>
    );
  }
}

export default ComponentF;


// In b/w opening and closing tags of the consumer component we need to specify a function