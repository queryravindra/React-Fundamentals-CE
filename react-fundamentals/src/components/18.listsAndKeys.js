import React from 'react';
import Person from './17.Person';

function ListAndkeys() {
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

    const personList = persons.map(person => <Person key={person.id} person={person} />);
    // key prop is not accessible in the child components it will throw undefined becz key prop is reserved if you want to use
    // key prop pass it as different prop and use it

    return <div>{personList}</div>;
}

export default ListAndkeys;
