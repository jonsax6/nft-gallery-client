import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
} from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { removeArtistSuccess } from '../AutoDismissAlert/messages'
import { indexArtists, removeArtist } from '../../api/artists'

const Artists = ({ msgAlert, user }) => {
  const [artists, setArtists] = useState([])
  const history = useHistory()

  useEffect(() => {
    indexArtists().then((res) => {
      const artists = res.data.artists
      setArtists(artists)
    })
  }, [])

  // const artistToDelete = (i) => {
  //   setArtist(artists[i])
  // }

  const onRemoveArtist = (i) => {
    const id = artists[i]._id
    console.log(id)
    removeArtist(id, user)
      .then(() =>
        msgAlert({
          heading: 'Remove Artist Success',
          message: removeArtistSuccess,
          variant: 'success'
        })
      )
      .then(() => history.push('/'))
      .catch((error) => {
        msgAlert({
          heading: 'Remove Artist Failed',
          message: error.message,
          variant: 'error'
        })
      })
  }

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
                <TableCell align='right'>Approved</TableCell>
                <TableCell align='right'></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {artists.map((artist, i) => (
                <TableRow
                  key={artist.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {artist.name}
                  </TableCell>
                  <TableCell align='right'>{artist.email}</TableCell>
                  <TableCell align='right'>{artist.account}</TableCell>
                  <TableCell align='right'>
                    {artist.approved ? 'YES' : 'NO'}
                  </TableCell>
                  <TableCell align='right'>
                    <Button
                      style={{ marginTop: '10px', marginRight: '10px' }}
                      size='small'
                      color='error'
                      variant='outlined'
                      onClick={(e) => onRemoveArtist(i)}>
                      <DeleteOutlineIcon
                        sx={{
                          color: 'error',
                          marginRight: '3px',
                          height: '18px',
                        }}
                      />
                      Remove
                    </Button>{' '}
                  </TableCell>
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
