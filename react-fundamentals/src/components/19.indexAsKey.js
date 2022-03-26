import React from 'react';
// import Person from './17.Person';

function IndexAsKey() {
    // const names = ['Ravindra', 'Phanindra', 'Satwik', 'Rohit'];
    const names = ['Ravindra', 'Phanindra', 'Satwik', 'Rohit', 'Ravindra'];

    // const nameList = names.map(name => <h2 key={name}>{name}</h2>);
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>);

    return <div>{nameList}</div>;
}

export default IndexAsKey;
