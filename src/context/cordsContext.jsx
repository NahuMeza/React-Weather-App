/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const CordsContext = createContext(null)

export const CordsProvider = ({ children }) => {
  const [cords, setCords] = useState({})
  const [statesName, setStatesName] = useState(null)
  return (
    <CordsContext.Provider value={{ setCords, cords, setStatesName, statesName }}>
      {children}
    </CordsContext.Provider>
  )
}
