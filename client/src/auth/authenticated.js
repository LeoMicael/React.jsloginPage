import React, {createContext, useState, useEffect} from 'react'

import  { useNavigate } from 'react-router-dom'

export const AuthContext = createContext();

export const AuthProvider = ( { children }) => {
    
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);
   
    useEffect (() => {
        const recoveryUser = localStorage.getItem('usuario')
        if (recoveryUser) {
            setUser( JSON.parse(recoveryUser)); 
        }
        setLoading(false);
    }, [] )
    
    const login = (email, password) => {
        if (email === "admin@123" && password === "123" ) {
            const user= {
                token: 123,
                email,
            }
        localStorage.setItem("usuario", JSON.stringify(user))
        setUser(user);
        navigate('/home');
        console.log(user);
        }
    }
    const logout = () => {
        console.log('logout')
        localStorage.removeItem("usuario")
        setUser(null)
    }
    return (
    <AuthContext.Provider value={{
    authenticated:!!user, user, loading, login, logout }}
    >
        { children }
    </AuthContext.Provider>
    )
}