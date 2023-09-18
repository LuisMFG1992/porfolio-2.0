import { createContext, useState } from 'react'

export const ThemeContext = createContext(undefined)

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState('MY DATA')

  return (
    <ThemeContext.Provider value={{ data, setData }}>
      {children}
    </ThemeContext.Provider>
  )
}
