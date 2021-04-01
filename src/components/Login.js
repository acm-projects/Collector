<<<<<<< HEAD
import React , {useState} from "react"
import {useAuth} from '../contexts/AuthContext'
import { useHistory} from "react-router-dom"
import { Form, Alert} from "react-bootstrap"
import { Button, createMuiTheme, Grid, InputAdornment, TextField, ThemeProvider } from '@material-ui/core'
import { AccountCircle, LockRounded } from '@material-ui/icons'
import logo from '../imgs/Logo.png'

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

export default function Login() {
    const [emailRef,setEmailRef]=React.useState("")
    const [passwordRef,setPasswordRef]=React.useState("")
    const {login}=useAuth()
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)
    const history=useHistory()
    
    const handleChangeEmail = (e) => {
      setEmailRef(e.target.value)
    }

    const handleChangePassword = (e) => {
      setPasswordRef(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault()
        try{
            setError("")
            setLoading(true)
            await login(emailRef,passwordRef)
            history.push("/dashboard")
        } catch (err) {
            console.log(err)
            switch(err.code) {
              case "auth/wrong-password":
                setError('Invalid email or password');
                break;
              default:
                setError('Failed to sign in');
            }
        }
        setLoading(false)
    }

    //Added the ID of "password" to password so that it is censored. Updated handling for the email and password
    return (
      <Form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <div>
            <Grid container style={{ minHeight: '100vh'}}>
              <Grid item xs={12} sm ={6}>
                <img src="https://images.unsplash.com/photo-1520367288098-2794e86c3586?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                style={{ width: '100%', height: '100%', objectFit: 'cover'}} 
                alt="brand" 
                />
              </Grid>
              <Grid container item xs={12} sm={6} 
              alignItems="center" 
              direction="column" 
              justify="space-between" 
              style={{padding: 10}}>
                <div />
                <div style={{ display: 'flex', flexDirection: "column", maxWidth: 400, minWidth: 300 }}>
                  <Grid container justify="center">
                    <img className = "margin-sm" src= {logo}
                    width={200} 
                    alt="logo" 
                    />
                    <h1>Welcome to Collector</h1>
                  </Grid>
                  {error && <Alert className="text-center" variant="danger">{error}</Alert>}
                <TextField label="Email" margin="normal" type="email" value={emailRef} onChange={handleChangeEmail} required InputProps={{ startAdornment: <InputAdornment position="start" >
                    <AccountCircle color="secondary"/>
                    </InputAdornment>}} />
                  <TextField id="standard-password-input" label="Password" margin="normal" type="password" value={passwordRef} onChange={handleChangePassword} required InputProps={{ startAdornment: <InputAdornment position="start">
                    <LockRounded color="secondary"/>
                  </InputAdornment>}}/>
                  <div style={{ height: 20}} />
                  <Button color="secondary" variant="contained" disabled={loading} type="submit">
                    Log in            
                  </Button>
                  <div style={{ height: 20}} />
                  <Button href="/signup" color="primary" variant="outlined">
                    Not a collector yet?        
                  </Button>
                </div>
                <div>
                  <Grid item>
                    <Button color="primary" variant="outlined">
                      Forgot your password?
                    </Button>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </ThemeProvider>
      </Form>
    )
=======
import React from 'react';
import { Button, createMuiTheme, Grid, InputAdornment, TextField, ThemeProvider } from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
     <Grid container style={{ minHeight: '100vh'}}>
       <Grid item xs={12} sm ={6}>
         <img src="https://images.unsplash.com/photo-1520367288098-2794e86c3586?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
         style={{ width: '100%', height: '100%', objectFit: 'cover'}} 
         alt="brand" 
         />
       </Grid>
       <Grid container item xs={12} sm={6} 
       alignItems="center" 
       direction="column" 
       justify="space-between" 
       style={{padding: 10}}>
         <div />
         <div style={{ display: 'flex', flexDirection: "column", maxWidth: 400, minWidth: 300 }}>
          <Grid container justify="center">
            <img src="https://files.slack.com/files-pri/T1CH1JVUZ-F01Q70LUMTL/image.png"
            width={200} 
            alt="logo" 
            />
            <h1>Welcome to collector</h1>
            <h2>Log in to add to your collection</h2>
          </Grid>
          <TextField label="Username" margin="normal" InputProps={{ startAdornment: <InputAdornment position="start">
            <AccountCircle color="secondary" />
          </InputAdornment>}} />
          <TextField label="Password" margin="normal" InputProps={{ startAdornment: <InputAdornment position="start">
            <LockRounded color="secondary" />
          </InputAdornment>}}/>
          <div style={{ height: 20}} />
          <Button color="secondary" variant="contained">
            Log in            
          </Button>
          <div style={{ height: 20}} />
          <Button color="primary" variant="outlined">
            Not a collector yet?            
          </Button>
         </div>
         <div>
           <Grid item>
             <Button color="primary" variant="outlined">
               Forgot your password?
             </Button>
           </Grid>
         </div>
       </Grid>
     </Grid>
    </div>
    </ThemeProvider>
  );
>>>>>>> frontend
}

export default App;
