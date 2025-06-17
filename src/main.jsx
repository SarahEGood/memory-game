import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// Should take data from complete selectedPkmns function and output to HTML including with click events

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)