import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import CoffeeContextProvider from './contexts/CoffeeContextProvider'
import './index.css'
import router from './routers/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoffeeContextProvider>
      <RouterProvider router={router} />
    </CoffeeContextProvider>
  </StrictMode>
)
