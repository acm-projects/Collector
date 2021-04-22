import React , {useRef,useState} from "react"
import { Form,Button,Card,Alert} from "react-bootstrap"
import {useAuth} from '../contexts/AuthContext'
import {Link} from "react-router-dom"
import {db} from '../firebase'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme(
  {
  palette: {
    primary: {
      light: '#5e677d',
      main: '#333d51',
      dark: '#0b1729',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffdd5e',
      main: '#d3ac2b',
      dark: '#9e7d00',
      contrastText: '#000',
    },
  },
});

export default function Signup() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef()
    const usernameRef = useRef()
    const {signup}=useAuth()
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        
        if(passwordRef.current.value!==passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }
        else {
            const snapshot= await db.users.where('displayName','==',usernameRef.current.value).get();
            if(!(snapshot.empty))
            {
                return setError('Username is already in use')
            }

            try{
                setError("")
                setLoading(true)
                await signup(emailRef.current.value,passwordRef.current.value, usernameRef.current.value)
             } catch {
                setError('Failed to create an account')
            }
            setLoading(false)
        }
    }

    return (
        <ThemeProvider theme={theme}>
        <>
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>  
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" ref={usernameRef} required/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required/>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                </Form>
                </Card.Body>
            </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account?<Link to="/login"> Log In</Link>
                </div>
        </>
        </ThemeProvider>
    )
}
