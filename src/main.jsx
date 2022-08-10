import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './contexts/userContext'
import App from './App'
import { CarritoContextProvider } from './contexts/carritoContext'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <CarritoContextProvider>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </CarritoContextProvider>
  </UserContextProvider>
)
