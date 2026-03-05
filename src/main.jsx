import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // <-- ИЗМЕНИЛИ ЗДЕСЬ
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>  {/* <-- И ЗДЕСЬ */}
      <App />
    </HashRouter>
  </React.StrictMode>,
)