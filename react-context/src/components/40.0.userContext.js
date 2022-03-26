import React from 'react';

const UserContext = React.createContext('Blablablabla');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
// for contextType
export default UserContext;

// 1.You can set a default value to your context and default value is set while creating the context
// It is passed as argument to the createContext() method

// 2.ContextType property