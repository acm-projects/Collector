import React,{ useContext, useState, useEffect} from 'react'
import { auth,db } from'../firebase'

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
                db.users.add({
                    displayName: username,
                    uid: currentUser.uid
                })
                //We update the user display name in the user context
            result.user.updateProfile({
                displayName: username
            })
        }).catch(error => {   
            switch(error.code) {
              case 'auth/email-already-in-use':
                    alert('Email already in use !')
                    break;
            }
        })
        } catch(err) {
            alert("Error : ", err);
            return err;
        }
        
    }
    
    function login(email,password){
        console.log(auth.signInWithEmailAndPassword(email,password));
        return auth.signInWithEmailAndPassword(email,password)
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


