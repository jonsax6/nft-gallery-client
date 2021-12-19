import React, { useState, useEffect } from 'react'
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import { indexArtists } from '../../api/artists'

const Artists = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [account, setAccount] = useState('')
  const [artists, setArtists] = useState([])

  useEffect(() => {
    indexArtists().then((res) => {
      const artists = res.data.artists
      setArtists(artists)
    })
  }, [])

  return (
    <Grid
      style={{ paddingTop: '150px', maxWidth: '80%', margin: 'auto' }}
      container
      justify='center'>
      <Grid item md>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table sitckyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <TableCell>Artist</TableCell>
                <TableCell align='right'>Email</TableCell>
                <TableCell align='right'>ETH Account</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {artists.map((artist) => (
                <TableRow
                  key={artist.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {artist.name}
                  </TableCell>
                  <TableCell align='right'>{artist.email}</TableCell>
                  <TableCell align='right'>{artist.account}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default Artists
