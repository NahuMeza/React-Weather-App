/* eslint-disable react/prop-types */
import { Button, Grid } from '@mui/material'
import { useContext } from 'react'
import { CordsContext } from '../context/cordsContext'
import { useNavigate } from 'react-router-dom'

export const ResultBox = ({ state }) => {
  const { setCords } = useContext(CordsContext)
  const nav = useNavigate()

  const climateCords = ({ cor }) => {
    setCords({ lat: cor.lat, lon: cor.lon })
    nav(`${cor.name}`)
  }

  if (state.length === 0) { return (<h2>No results found!</h2>) }

  return (
    <Grid container spacing={4}>
      {state.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={JSON.stringify([item.lat, item.lon])}>
          <Button variant='outlined' onClick={() => { climateCords({ cor: item }) }}>
            {item.name}, {item.state}, {item.country}
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}
