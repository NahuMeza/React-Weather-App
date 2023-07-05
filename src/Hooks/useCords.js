import { useRef, useContext } from 'react'
import { CordsContext } from '../context/cordsContext.jsx'
import { useNavigate } from 'react-router-dom'

export function useCords () {
  const inputValue = useRef('')
  const { setStatesName } = useContext(CordsContext)
  const navigate = useNavigate()

  const getCords = () => {
    setStatesName(null) // sets the state to null so the user receives a loading message
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputValue.current.value}&limit=5&appid=${import.meta.env.VITE_API_KEY}`)
      .then(response => response.json())
      .then(data => setStatesName(data))
  }

  const handleSumbit = (e) => {
    e.preventDefault()
    getCords()
    navigate(`/search/${inputValue.current.value}`)
  }

  return { inputValue, handleSumbit }
}
