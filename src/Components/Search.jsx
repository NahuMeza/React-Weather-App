import { useCords } from '../Hooks/useCords'

export const Search = () => {
  const { searchValue, handleSumbit } = useCords()

  return (
    <>
      <form onSubmit={handleSumbit}>
        <input type='text' placeholder='Search...' ref={searchValue} />
        <button type='submit'>Search</button>
      </form>
    </>
  )
}
