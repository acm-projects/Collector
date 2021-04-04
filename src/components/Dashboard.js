import React, {useState} from 'react'
import {Card, Button, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from "react-router-dom"
import {auth} from '../firebase'

export default function Dashboard() {
    const[error,setError]=useState("")
    const currentUser = useAuth()
    const history =useHistory()

    
    async function handleLogout(){
        setError("")
        try{
            auth.signOut().then(() => {
                history.push('/login')
                // Sign-out successful.
              }).catch((error) => {
                // An error happened.
              })
        }catch (err) {
            alert(err)
            setError('Failed to log out')
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email: </strong>{currentUser.email}

                    <strong>Username: </strong>{currentUser.displayName}
                    <Link to="/update-profile" className="btn btn-primary w-100 m-3">Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
            <div className="w-100 text-center mt-2">
                    <Link to="/sell"> Sell Something!</Link>
            </div>
        </>
    )
}
