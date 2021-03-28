import React from "react"
import Signup from "./Signup"
import {AuthProvider} from "../contexts/AuthContext"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import Homepage from "./Homepage"
import CreateListing from "./CreateListing"

function App() { 
  return (
     <div>
       <Router>
       <AuthProvider>
         <Switch>
           <Route exact path="/" component={Homepage}/> 
           <Route path="/dashboard" component={Dashboard}/> 
           <Route path="/signup" component={Signup}/>
           <Route path="/login" component={Login}/>
           <Route path="/sell" component={CreateListing}/>
         </Switch>
       </AuthProvider>
       </Router>
      </div>
  )
}

export default App
