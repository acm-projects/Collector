/*
  DISCLAIMER: THE CONTENTS INVOLVING THE BASIC STRUCTURE OF THE LOGIN PAGE BELONG TO "Web Dev Simplified"
  Tutorial URL: https://www.youtube.com/watch?v=PKwu15ldZ7k
*/

import React from "react"
import Signup from "./Signup"
import {AuthProvider} from "../contexts/AuthContext"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import LandingPage from "./LandingPage"
import ProfilePage from './ProfilePage'
import ForgotPassword from './ForgotPassword'
import ProductGallery from './ProductGallery'
import { CssBaseline } from '@material-ui/core';
import Homepage from './Homepage'
import Checkout from './Checkout'
import ItemPage from './ItemPage'


function App() { 
  return (

    
     <div>
     <CssBaseline />
       <Router>
       <AuthProvider>
         <Switch>
           <Route exact path="/" component={Homepage}/> 
           <Route path="/signup" component={Signup}/>
           <Route path="/login" component={Login}/>
           <Route path="/landing" component={LandingPage}/>
           <Route path="/gallery" component={ProductGallery}/>
           <Route path="/forgotpassword" component={ForgotPassword}/>
           <Route path="/profile" component={ProfilePage}/>
           <Route path="/checkout" component={Checkout}/>
           <Route path="/item" component={ItemPage}/>

         </Switch>
       </AuthProvider>
       </Router>
      </div>
  )
}

export default App
