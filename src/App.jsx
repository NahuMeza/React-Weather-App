
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header'

function App () {
  return (
    <>
      <Navigate to='/home' />
      <Routes>
        <Route path='/home' element={<Header />} />
      </Routes>
    </>
  )
}

export default App
