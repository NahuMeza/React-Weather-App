/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { CordsContext } from '../context/cordsContext'
import { ResultBox } from './ResultBox'
import { CircularProgress } from '@mui/material'

export const SearchResults = () => {
  const { statesName } = useContext(CordsContext)

  return (
    <div style={{ margin: '20px', paddingLeft: '50px' }}>
      {statesName ? <ResultBox state={statesName} /> : <CircularProgress />}
    </div>
  )
}
