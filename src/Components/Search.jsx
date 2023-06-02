import { useCords } from '../Hooks/useCords'

export const Search = () => {
  const { inputValue, handleSumbit } = useCords()

  return (
    <>
      <form onSubmit={handleSumbit}>
        <input type='text' placeholder='London, Paris, Córdoba...' ref={inputValue} />
        <button type='submit'>Search</button>
      </form>
    </>
  )
}
