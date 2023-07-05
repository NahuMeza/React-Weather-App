
import { useParams } from 'react-router-dom'
import { useWeather } from '../Hooks/useWeather'
import { CircularProgress } from '@mui/material'

export const StateWeather = () => {
  const { weatherData } = useWeather()
  const urlParam = useParams()
  const imageURL = weatherData ? `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` : ''

  return (
    <section>
      {weatherData
        ? <div>
          <h1><span>{weatherData.city}</span>{urlParam.state}<span /></h1>
          {weatherData.weather.length > 0 ? <img src={imageURL} alt='weather image' /> : <h2>Loading..</h2>}
          <h1>{JSON.stringify(weatherData)}</h1>
          </div>
        : <CircularProgress />}
    </section>
  )
}
