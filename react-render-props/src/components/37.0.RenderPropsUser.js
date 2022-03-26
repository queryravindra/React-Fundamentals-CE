import React, { Component } from 'react';

class RenderPropsUser extends Component {
  render() {
    return (
        // <div>{this.props.name}</div>
        // <div>{this.props.name()}</div>
        <div>{this.props.render(true)}</div>
    );
  }
}

export default RenderPropsUser;


// In React it is possible to use a prop whose value is a function to control what is actually rendered by a component