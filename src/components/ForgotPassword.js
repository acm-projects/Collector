import React from 'react';
import { Button, createMuiTheme, Grid, InputAdornment, TextField, ThemeProvider } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import Footer from "./footer";
import Header from './Header/header'
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
      <Header />
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
            <h1>Forgot your password?</h1>
            <h2>Enter your email below to reset your password</h2>
          </Grid>
          <TextField label="Email address" margin="normal" InputProps={{ startAdornment: <InputAdornment position="start">
            <AccountCircle color="secondary" />
          </InputAdornment>}} />
          <div style={{ height: 20}} />
          <Button color="secondary" variant="contained">
            Reset Password            
          </Button>
          <div style={{ height: 20}} />
          <Button color="primary" variant="outlined">
            Not a collector yet?            
          </Button>
         </div>         
       </Grid>
     </Grid>
     <Footer />

    </div>
    </ThemeProvider>
  );
}

export default App;
