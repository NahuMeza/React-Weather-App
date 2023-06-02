import { useWeather } from '../Hooks/useWeather'

export const SearchResults = () => {
  const { weatherData } = useWeather()

  return (
    <section>
      <h1>{weatherData.country}</h1>
    </section>
  )
}
