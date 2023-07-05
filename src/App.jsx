
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
import { SearchResults } from './Components/SearchResults'
import { StateWeather } from './Components/StateWeather'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<h1>Home</h1>} />
        <Route path='/search/:city' element={<SearchResults />} />
        <Route path='/search/:city/:state' element={<StateWeather />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default App
