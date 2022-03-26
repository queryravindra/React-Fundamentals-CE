import React, { Component } from 'react';

class EventHandlingInClass extends Component {
    clickHandler() {
        console.log('Clicked the Button');
    }

    render() {
      return (
          <div>
              <button onClick={this.clickHandler}>Click Me</button>
          </div>
      );
    }
}

export default EventHandlingInClass;
