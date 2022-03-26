import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
           count: 0
        }
    }
  
    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        return (
            <div>
                {/* { this.props.render(this.state.count, this.incrementCount) } */}

                {/* Infact there is a variation of the render props pattern which doesnt make use of props instead the children prop is used */}
                { this.props.children(this.state.count, this.incrementCount) }
            </div>
        );
    }
}

export default Counter;
