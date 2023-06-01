import { useRef, useContext } from 'react'
import { CordsContext } from '../context/cordsContext.jsx'

export function useCords () {
  const searchValue = useRef('')
  const { setCords } = useContext(CordsContext)

  const getCords = () => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchValue.current.value}&limit=1&appid=${import.meta.env.VITE_API_KEY}`)
      .then(response => response.json())
      .then(data => setCords({ lat: data[0].lat, lon: data[0].lon }))
  }

  const handleSumbit = (e) => {
    e.preventDefault()
    getCords()
  }

  return { searchValue, handleSumbit }
}
