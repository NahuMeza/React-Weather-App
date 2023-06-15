import { CordsContext } from '../context/cordsContext'
import { useContext, useEffect, useState } from 'react'

export const useWeather = () => {
  const { cords } = useContext(CordsContext)
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cords.lat}&lon=${cords.lon}&appid=${import.meta.env.VITE_API_KEY}`)
      .then(response => response.json())
      .then(data => setWeatherData({
        country: data.sys.country,
        city: data.name,
        weather: data.weather,
        temp: data.main.temp
      }))
  }, [cords])

  return { weatherData }
}
