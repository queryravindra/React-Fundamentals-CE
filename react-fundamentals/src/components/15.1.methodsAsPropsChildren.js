import React from 'react';

function MethodsAsPropsChildren(props) {
  return (
      <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

            {/* Now lets see how to pass parameter when calling the parent method from child component and
            this is where an arrow function in the return statement is really useful
            Arrow function syntax is the simplest way to pass parameter from the child component to parent component */}
            {/* we can pass any no.of parameters to greetHandler() */}
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
      </div>
  );
}

export default MethodsAsPropsChildren;

// By the way you cant destructurate the props object(methods) in this functional component(in this case)