/*
  DISCLAIMER: THE CONTENTS INVOLVING THE BASIC STRUCTURE OF THE LOGIN PAGE BELONG TO "Web Dev Simplified"
  Tutorial URL: https://www.youtube.com/watch?v=PKwu15ldZ7k
*/

import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import {AuthProvider} from "../contexts/AuthContext"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import LandingPage from "./LandingPage"
import ForgotPassword from './ForgotPassword'
import PrivateRoute from "./PrivateRoute"
import Homepage from "./Homepage"
import ProductGallery from './ProductGallery'
import { CssBaseline } from '@material-ui/core';


function App() { 
  return (

    
     <div>
     <CssBaseline />
       <Router>
       <AuthProvider>
         <Switch>
           <Route exact path="/" component={Dashboard}/> 
           <Route path="/signup" component={Signup}/>
           <Route path="/login" component={Login}/>
           <Route path="/landing" component={LandingPage}/>
           <Route path="/gallery" component={ProductGallery}/>
           <Route path="/forgotpassword" component={ForgotPassword}/>
         </Switch>
       </AuthProvider>
       </Router>
      </div>
  )
}

export default App
