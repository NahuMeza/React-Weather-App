import { useRef } from 'react'
export function Cords () {
  const searchValue = useRef('')
  const API_KEY = 'd806c0e719df32b6c26dad2bd10f4879'

  const handleSumbit = (e) => {
    e.preventDefault()
    getCords()
  }

  const getCords = () => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchValue.current.value}&limit=1&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return { searchValue, handleSumbit }
}
