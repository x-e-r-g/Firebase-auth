import React, {useState, useRef, useContext, useEffect} from 'react';
import {auth} from "./../firebase";

const AuthContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = (props)=>{
    const [currentUser, setCurrentUser] = useState({});
    const signup = (email, password)=>{
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const signout = () => {
        return auth.signOut();
    }
    
    const updateEmail = (email)=>{
        return currentUser.updateEmail(email);
    }

    const updatePassword = (password) => {
        return currentUser.updatePassword(password);
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            setCurrentUser(user);
        });
        return unsubscribe;
    }, [])

    return(
        <AuthContext.Provider value={{currentUser, signup, login, signout, updateEmail, updatePassword}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider, useAuth};