import { ReactLogo } from '../Icons/ReactLogo.jsx'
import './Header.css'
import { Search } from './Search.jsx'

export const Header = () => {
  return (
    <header>
      <h1> <ReactLogo /> Weather App</h1>
      <Search />
    </header>
  )
}
