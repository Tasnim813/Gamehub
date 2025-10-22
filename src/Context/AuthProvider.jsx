import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
;
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const createUserWithEmailAndPasswordfunc=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInWithEmailAndPasswordfunc=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithPopupfunc=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const authData={
        user,
        setUser,
        createUserWithEmailAndPasswordfunc,
        signInWithEmailAndPasswordfunc,
        signInWithPopupfunc

    }
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;