import React from "react"
import Signup from "./Signup"
import {AuthProvider} from "../contexts/AuthContext"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
<<<<<<< HEAD
import Homepage from "./Homepage"
import CreateListing from "./CreateListing"

function App() { 
  return (
     <div>
=======
import LandingPage from "./LandingPage"
import ProfilePage from './ProfilePage'
import ForgotPassword from './ForgotPassword'
import ProductGallery from './ProductGallery'
import { CssBaseline } from '@material-ui/core';


function App() { 
  return (

    
     <div>
     <CssBaseline />
>>>>>>> frontend
       <Router>
       <AuthProvider>
         <Switch>
           <Route exact path="/" component={Homepage}/> 
           <Route path="/dashboard" component={Dashboard}/> 
           <Route path="/signup" component={Signup}/>
           <Route path="/login" component={Login}/>
<<<<<<< HEAD
           <Route path="/sell" component={CreateListing}/>
=======
           <Route path="/landing" component={LandingPage}/>
           <Route path="/gallery" component={ProductGallery}/>
           <Route path="/forgotpassword" component={ForgotPassword}/>
           <Route path="/profile" component={ProfilePage}/>
>>>>>>> frontend
         </Switch>
       </AuthProvider>
       </Router>
      </div>
  )
}

export default App
