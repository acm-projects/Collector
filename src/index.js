import React from 'react';
import ReactDOM from "react-dom"
import App from './components/App'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'semantic-ui-css/semantic.min.css'

import "bootstrap/dist/css/bootstrap.min.css"


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
)
