import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

import appFirebase from './firebase-config'; 


const auth=getAuth(appFirebase)

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [token, setToken] = useState(localStorage.getItem("token") || "")
  const [logedUserEmail, setLogedUserEmail] = useState(localStorage.getItem("logedUserEmail") || "")


  const signUp = async ({ email, password }) => {
    setIsLoading(true)
    const res = await createUserWithEmailAndPassword(auth, email, password)
    setIsLoading(false)
    if (res) {
      email = "";
      password = "";
    }
  }

  const signIn = async ({ email, password }) => {
    setIsLoading(true)
    await signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
      setLogedUserEmail(userCredential.user.email)
      email = "";
      password = "";
      localStorage.setItem("token", userCredential.user.accessToken)
      localStorage.setItem("logedUserEmail", userCredential.user.email)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
    setIsLoading(false)
  }

  const signout = async () => {
    await signOut(auth);
    setToken("")
    localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider value={{ token, signIn, signUp, isLoading, signout, logedUserEmail }}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthProvider;