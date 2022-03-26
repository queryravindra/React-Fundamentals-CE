import React from 'react';
import Person from './17.Person';

// function ListRendering() {
//     const names = ['Ravindra', 'Phanindra', 'Satwik', 'Rohit'];
//     return (
//         <div>
//             {
//                 names.map(name => <h2>{name}</h2>)
//             }
//         </div>
//     );
// }

// function ListRendering() {
//     const names = ['Ravindra', 'Phanindra', 'Satwik', 'Rohit'];
//     const nameList = names.map(name => <h2>{name}</h2>);
//     return <div>{nameList}</div>;
// }

function ListRendering() {
    const persons = [
        {
            id: 1,
            name: 'Ravindra',
            age: 22,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Phanindra',
            age: 28,
            skill: 'Angular'
        },
        {
            id: 4,
            name: 'Rohit',
            age: 24,
            skill: 'Vue'
        },
        {
            id: 26,
            name: 'Satwik',
            age: 22,
            skill: 'NextJs'
        }
    ];

    const personList = persons.map(person => <Person person={person} />);

    return <div>{personList}</div>;
}

export default ListRendering;
