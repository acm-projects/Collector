import React,{ useContext, useState, useEffect} from 'react'
import { auth } from'../firebase'

const AuthContext=React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const[currentUser,setCurrentUser]=useState()
    const[loading,setLoading]=useState(true)

    function signup(email,password, username){
        auth.createUserWithEmailAndPassword(email,password)
        .then(function(result) {
            return result.user.updateProfile({
                displayName: username
            })
        }).catch(function(error) {
            console.log(error);
        })
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


