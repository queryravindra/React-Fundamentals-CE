import React, { Component } from 'react';

// props to functional components
// const Props = (props) => {
//     return (
//         // JSX will return only one element so go and wrap in single div
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     );
// };


// props to class components
class Props extends Component {
    render() {
        return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>;
    }
}

export default Props;