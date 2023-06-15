/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { CordsContext } from '../context/cordsContext'
import { Button, CircularProgress } from '@mui/material'

const ResultBox = ({ state }) => {
  return (
    state.map((item) => (
      <Button key={JSON.stringify([item.lat, item.lon])} variant='outlined'>
        {item.name}, {item.state}, {item.country}
      </Button>
    ))
  )
}

export const SearchResults = () => {
  const { statesName } = useContext(CordsContext)

  return (
    <div>
      {statesName.length > 0 ? <ResultBox state={statesName} /> : <CircularProgress />}
      {JSON.stringify(statesName[1])}
    </div>
  )
}
