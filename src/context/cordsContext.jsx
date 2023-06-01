/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const CordsContext = createContext(null)

export const CordsProvider = ({ children }) => {
  const [cords, setCords] = useState({})
  return (
    <CordsContext.Provider value={{ setCords, cords }}>
      {children}
    </CordsContext.Provider>
  )
}
