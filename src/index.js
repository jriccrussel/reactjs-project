import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css';
import App from './App'
// import {AppProvider} from './Sidebar/context'
// import {AppProvider} from './Stripe/context'
// import {AppProvider} from './Cart/context'
// import {AppProvider} from './Cocktail/context'

// Movie DB App
import {AppProvider} from './MovieDb/context'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  // you need to add provider para maka gamit ka sa custom useContext
  // <React.StrictMode>
  //   <AppProvider>
  //     <App />
  //   </AppProvider>
  // </React.StrictMode>,

  // Movie Db App na naay Router
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
