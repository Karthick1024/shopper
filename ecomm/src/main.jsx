import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopcontextProvider from './context/Shopcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopcontextProvider>
    <App />
    </ShopcontextProvider>
  </StrictMode>,
)
