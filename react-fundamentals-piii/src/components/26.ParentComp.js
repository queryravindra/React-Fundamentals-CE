import React, { Component } from 'react';
import PureComp from './26.PureComp';
import RegComp from './26.RegComp';
import MemoComp from './27.MemoComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Ravindra'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Ravindra'
            });
        }, 2000);
    }
    
    render() {
        console.log('********************Parent Component render********************');
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                {/* <RegComp name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
            </div>
        );
    }
}

export default ParentComp;
