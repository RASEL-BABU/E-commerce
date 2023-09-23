import React, { createContext, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext= createContext(null)
const  auth=getAuth(app)

const Authprovider = ({children}) => {

    const [user,setUser]=useState(null)

    const  createUser=(email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password)
    }
    const LogIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,password,email)
    }
    const LogOut=()=>{
        signOut(auth);
    }

const Info={
    user,
    createUser,
    LogIn,
    LogOut,
}
    return (
       <AuthContext.Provider value={Info}>
        {children}

       </AuthContext.Provider>
    );
};

export default Authprovider;