// Destructuring is an ES6 Feature that makes it possible to unpack values from Arrays or properties from objects -
// - into distinct variables

// There are two ways to destructure props in a functional component


// 1st Way - to destructure it in the function parameter itself
import React from 'react';

// const DestructPropAndState = ({name, heroName}) => {
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//         </div>
//     );
// }

// 2.Destructure it in the function body

const DestructPropAndState = props => {
    const { name, heroName } = props;
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    );
}

export default DestructPropAndState;
