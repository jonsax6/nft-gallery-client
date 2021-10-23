import React, { useState } from 'react'
import { createArtwork, showArtwork } from '../../api/artwork'
import {
  Typography,
  Grid,
  Button,
  Box
} from '@mui/material'
import TextField from '@mui/material/TextField'

const SubmitArt = ({ msgAlert, user }) => {
  const [artist, setArtist] = useState(null)
  const [title, setTitle] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [releaseDate, setReleaseDate] = useState(null)
  const [medium, setMedium] = useState(null)
  const [artistRoyalty, setArtistRoyalty] = useState(null)
  const [curatorRoyalty, setCuratorRoyalty] = useState(null)
  const [provenance, setProvenance] = useState(null)
  const [exhibitionHistory, setExhibitionHistory] = useState(null)
  const [publishingHistory, setPublishingHistory] = useState(null)
  const [notes, setNotes] = useState(null)

  const art = {
    artist: artist,
    title: title,
    imageUrl: imageUrl,
    releaseDate: releaseDate,
    medium: medium,
    artistRoyalty: artistRoyalty,
    curatorRoyalty: curatorRoyalty,
    provenance: provenance,
    exhibitionHistory: exhibitionHistory,
    publishingHistory: publishingHistory,
    notes: notes
  }

  const handleChangeArtist = (event) => {
    setArtist(event.target.value)
    console.log(artist)
  }

  const handleChangeTitle = (event) =>
    setTitle(event.target.value)

  const handleChangeImageUrl = (event) =>
    setImageUrl(event.target.value)

  const handleChangeReleaseDate = (event) =>
    setReleaseDate(event.target.value)

  const handleChangeMedium = (event) =>
    setMedium(event.target.value)

  const handleChangeArtistRoyalty = (event) =>
    setArtistRoyalty(event.target.value)

  const handleChangeCuratorRoyalty = (event) =>
    setCuratorRoyalty(event.target.value)

  const handleChangeProvenance = (event) =>
    setProvenance(event.target.value)

  const handleChangeExhibitionHistory = (event) =>
    setExhibitionHistory(event.target.value)

  const handleChangePublishingHistory = (event) =>
    setPublishingHistory(event.target.value)

  const handleChangeNotes = (event) =>
    setNotes(event.target.value)

  createArtwork(art, user)
    .then((res) => {
      console.log(res)
    })
    // .then((res) => setArtwork(res.data.order))
    .catch((err) => {
      console.error(err)
    })

  const testArtwork = (art) => {
    console.log(art)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <div></div>
          </Grid>
          <Grid
            item
            xs={10}
            md={6}
            lg={4}
            style={{ marginTop: '20px', marginLeft: '10px' }}>
            <Typography variant='h5'>Submit Artwork</Typography>
          </Grid>
          <Grid item xs>
            <div></div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <div></div>
          </Grid>
          <Grid item xs={5} md={3} lg={2}>
            <TextField
              required
              id='outlined-required'
              label='Artist'
              variant='outlined'
              color='primary'
              onChange={handleChangeArtist}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs={5} md={3} lg={2}>
            <TextField
              required
              id='outlined-required'
              label='Title'
              variant='outlined'
              color='primary'
              onChange={handleChangeTitle}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs>
            <div></div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <div></div>
          </Grid>
          <Grid item xs={5} md={3} lg={2}>
            <TextField
              required
              id='outlined-required'
              label='ImageUrl'
              variant='outlined'
              color='primary'
              onChange={handleChangeImageUrl}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs={5} md={3} lg={2}>
            <TextField
              required
              id='outlined-required'
              label='ReleaseDate'
              variant='outlined'
              color='primary'
              onChange={handleChangeReleaseDate}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs>
            <div></div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <div></div>
          </Grid>
          <Grid item xs={5} md={3} lg={2}>
            <TextField
              required
              id='outlined-required'
              label='Medium'
              variant='outlined'
              color='primary'
              onChange={handleChangeMedium}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs={5} md={3} lg={2}>
            <TextField
              required
              id='outlined-required'
              label='ArtistRoyalty'
              variant='outlined'
              color='primary'
              onChange={handleChangeArtistRoyalty}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs>
            <div></div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <div></div>
          </Grid>
          <Grid item xs={5} md={3} lg={2}>
            <TextField
              required
              id='outlined-required'
              label='CuratorRoyalty'
              variant='outlined'
              color='primary'
              onChange={handleChangeCuratorRoyalty}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs={5} md={3} lg={2}>
            <TextField
              required
              id='outlined-required'
              label='Provenance'
              variant='outlined'
              color='primary'
              onChange={handleChangeProvenance}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs>
            <div></div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <div></div>
          </Grid>
          <Grid item xs={5} md={3} lg={2}>
            <TextField
              required
              id='outlined-required'
              label='ExhibitionHistory'
              variant='outlined'
              color='primary'
              onChange={handleChangeExhibitionHistory}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs={5} md={3} lg={2}>
            <TextField
              required
              id='outlined-required'
              label='PublishingHistory'
              variant='outlined'
              color='primary'
              onChange={handleChangePublishingHistory}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs>
            <div></div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <div></div>
          </Grid>
          <Grid item xs={10} md={6} lg={4}>
            <TextField
              required
              id='outlined-required'
              label='Notes'
              variant='outlined'
              color='primary'
              onChange={handleChangeNotes}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs>
            <div></div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <div></div>
          </Grid>
          <Grid
            item
            xs={10}
            md={6}
            lg={4}
            style={{ marginTop: '20px', marginLeft: '10px' }}>
            <Button variant='contained' type='submit' onClick={testArtwork}>
              Submit Artwork
            </Button>
          </Grid>
          <Grid item xs>
            <div></div>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SubmitArt