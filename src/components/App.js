import React from "react"
import Signup from "./Signup"
import {AuthProvider} from "../contexts/AuthContext"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Dashboard from "./Dashboard"
import PrivateRoute from "./PrivateRoute"
import Login from "./Login"
import LandingPage from "./LandingPage"
import ProfilePage from './ProfilePage'
import ForgotPassword from './ForgotPassword'
import ProductGallery from './ProductGallery'
import Checkout from './Checkout'
import ItemPage from './ItemPage'
import { CssBaseline } from '@material-ui/core';
import Cart from './Cart'
import NewListing from './NewListing'
import NewSignUp from './NewSignUp'

function App() { 
  return (
     <div>
     <CssBaseline />
       <Router>
       <AuthProvider>
         <Switch>
           <Route exact path="/" component={ProductGallery}/> 
           <PrivateRoute path="/dashboard" component={Dashboard}/> 
           <Route path="/signup" component={Signup}/>
           <Route path="/newsignup" component={NewSignUp}/>

           <Route path="/login" component={Login}/>
           <Route path="/landing" component={LandingPage}/>
           <Route path="/gallery" component={ProductGallery}/>
           <Route path="/forgotpassword" component={ForgotPassword}/>
           <Route path="/item/:id" component={ItemPage}/>
           <Route path="/checkout" component={Checkout}/>
           <PrivateRoute path="/cart" component={Cart}/>
           <PrivateRoute path="/sell" component={NewListing}/>
           <PrivateRoute path="/profile" component={ProfilePage}/>
         </Switch>
       </AuthProvider>
       </Router>
      </div>
  )
}

export default App

