import { ReactLogo } from '../Icons/ReactLogo.jsx'
import './Header.css'
import { Search } from './Search.jsx'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #d4d1d1;
  }
`

export const Header = () => {
  return (
    <header>
      <StyledLink to='/home'><h1><ReactLogo /> Weather App</h1></StyledLink>
      <Search />
    </header>
  )
}
