import React,{ useContext, useState, useEffect} from 'react'
import { auth,db } from'../firebase'
import firebase from "firebase/app"

const AuthContext=React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const[currentUser,setCurrentUser]=useState()
    const[loading,setLoading]=useState(true)

    function signup(email,password, username){
        try {
            auth.createUserWithEmailAndPassword(email,password)
            .then(
            function(result) {
                //Upon a successful user creation we store the unique username into the database
                addDisplayName(username)
                //We update the user display name in the user context
            result.user.updateProfile({
                displayName: username
            })
            }).catch(error => {   
                switch(error.code) {
                    case 'auth/email-already-in-use':
                        alert('Email already in use !')
                        break;
                    default:
                        break;
                    }
                })
        } catch(err) {
            alert("Error : ", err);
            return err;
        }
        
    }

    async function addDisplayName(username){
        await db.users.add({
            displayName: username,
            uid: currentUser.uid
        })
    }


    function login(email,password){
        console.log(auth.signInWithEmailAndPassword(email,password));
        return auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          // Existing and future Auth states are now persisted in the current
          // session only. Closing the window would clear any existing state even
          // if a user forgets to sign out.
          // ...
          // New sign-in will be persisted with session persistence.
          return auth.signInWithEmailAndPassword(email, password);
        })
        .catch((error) => {
          console.log("Sign In Failed")
        });
    }
    
    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
            setLoading(false)
            setCurrentUser(user)
        })
        return unsubscribe
    },[])

    const value ={
        currentUser,
        login,
        //updateUsername,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


