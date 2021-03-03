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
import PrivateRoute from "./PrivateRoute"
import Homepage from "./Homepage"

function App() { 
  return (
  
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
     <div className="w-100" style={{maxWidth:"400px"}}>
       <Router>
       <AuthProvider>
         <Switch>
           <Route exact path="/" component={Dashboard}/> 
           <Route path="/signup" component={Signup}/>
           <Route path="/login" component={Login}/>
         </Switch>
       </AuthProvider>
       </Router>
      </div>
    </Container>
  )
}

export default App
