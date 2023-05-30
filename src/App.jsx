import { Cords } from './Hooks/Cords.js'
import { Header } from './Components/Header'

const Search = () => {
  const { searchValue, handleSumbit } = Cords()

  return (
    <>
      <form onSubmit={handleSumbit}>
        <input type='text' placeholder='Search...' ref={searchValue} />
        <button type='submit'>Search</button>
      </form>
    </>
  )
}

function App () {
  return (
    <>
      <Header />
      <Search />
    </>
  )
}

export default App
