import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.confige";


export const UserContext = createContext()

const AuthContext = ({children}) => {

    const [user, setUser] = useState(null) 
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()

    // Create Account
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign in

    const SignIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // log Out

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // google Login
    const googleLogin = ()=>{
       return signInWithPopup(auth, provider)
    }


    // useloader data

    useEffect(()=>{
      const unSubscribe =   onAuthStateChanged(auth, curentUser=>{

          setLoading(false)
          setUser(curentUser)

        })

        return()=>{
            unSubscribe()

        }
    },[])


   const userInfo = { user, loading, createUser,SignIn, logOut, googleLogin}

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;