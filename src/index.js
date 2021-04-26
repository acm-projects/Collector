import React from 'react';
import ReactDOM from "react-dom"
import App from './components/App'
import 'semantic-ui-css/semantic.min.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import app from "./firebase"
import { getFirestore, createFirestoreInstance} from 'redux-firestore'
import rootReducer from './redux/reducers/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducer, composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
));

const rrfProps = {
  firebase: app,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps} >
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
)
