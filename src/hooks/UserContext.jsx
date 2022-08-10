import React, { useState, useContext, createContext } from 'react'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

//hook para acceder al context de forma mas facil:
export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context)
    throw new Error('useUserContext debe ser usado con UserContextProvider')
  return context
}
