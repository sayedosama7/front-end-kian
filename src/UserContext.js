import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [auth, setAuth] = useState(() => {
        const storedAuth = localStorage.getItem('auth');
        return storedAuth ? JSON.parse(storedAuth) : {
            token: null,
            username: null,
            email: null,
            city: null,
            phone: null,
            id: null,
            course_id: null,
            course_title: null,
        };
    });

    const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('token'));

    useEffect(() => {
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
            setAuth(JSON.parse(storedAuth));
        }
    }, []);

    useEffect(() => {
        if (auth.token) {
            localStorage.setItem('auth', JSON.stringify(auth));
            setIsLoggedIn(true);
        } else {
            localStorage.removeItem('auth');
            setIsLoggedIn(false);
        }
    }, [auth]);

    return (
        <UserContext.Provider value={{ auth, setAuth, isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
}
