import { useRef } from 'react'
export function Cords () {
  const searchValue = useRef('')

  const handleSumbit = (e) => {
    e.preventDefault()
    getCords()
  }

  const getCords = () => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchValue.current.value}&limit=1&appid=${import.meta.env.VITE_API_KEY}`)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return { searchValue, handleSumbit }
}
