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
import Homepage from './Homepage'
import CreateListing from './CreateListing'
import Cart from './Cart'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import {createStore, combineReducers, compose } from 'redux'
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'

const fbConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

function App() { 
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
     <div>
     <CssBaseline />
       <Router>
       <AuthProvider>
         <Switch>
           <Route exact path="/" component={Homepage}/> 
           <PrivateRoute path="/dashboard" component={Dashboard}/> 
           <Route path="/signup" component={Signup}/>
           <Route path="/login" component={Login}/>
           <Route path="/landing" component={LandingPage}/>
           <Route path="/gallery" component={ProductGallery}/>
           <Route path="/forgotpassword" component={ForgotPassword}/>
           <Route path="/item/:id" component={ItemPage}/>
           <Route path="/checkout" component={Checkout}/>
           <Route path="/cart" component={Cart}/>
           <PrivateRoute path="/profile" component={ProfilePage}/>
           <PrivateRoute path="/sell" component={CreateListing} />
         </Switch>
       </AuthProvider>
       </Router>
      </div>
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

export default App

