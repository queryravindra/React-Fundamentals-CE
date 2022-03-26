// rce - class
// rfc - function

import React, { Component } from 'react';

class DestructPropAndStateInClass extends Component {
    render() {
        const { name, heroName } = this.props;
        // for state
        // const { state1, state2 } = this.state; 13

        return (
            <h1>
                Welcome {name} a.k.a {heroName}
            </h1>
        );
    }
}

export default DestructPropAndStateInClass;
