import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/index.css'

// Get the base path from the current location
const getBasename = () => {
  const path = window.location.pathname
  // If deployed to GitHub Pages with repo name, use it as basename
  if (path.includes('/yupei-cai-website/')) {
    return '/yupei-cai-website'
  }
  return '/'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

