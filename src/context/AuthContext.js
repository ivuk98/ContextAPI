import React, { createContext, useState } from 'react';

// Define context
const AuthContext = createContext();

// Define the Provider
const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useStatea(false);

    return (
        <AuthContext.Provider value={isLoggedIn}>
            {props.children}
        </AuthContext.Provider>
    );
}

// Define consumer
const AuthConsumer = AuthContext.Consumer;

export { AuthConsumer, AuthProvider, AuthConsumer }