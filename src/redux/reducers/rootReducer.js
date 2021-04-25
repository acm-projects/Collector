import { combineReducers } from 'redux';
import { firebaseReducer } from "react-redux-firebase"
import { firestoreReducer } from 'redux-firestore'
import reducers from './reducers'

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    products: reducers
});

export default rootReducer;