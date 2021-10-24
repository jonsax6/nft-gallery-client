import React, { useState, useEffect } from 'react'
import { createArtwork, showArtwork } from '../../api/artwork'
import { submitArtworkSuccess, submitArtworkFailure } from '../AutoDismissAlert/messages'
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
  const [success, setSuccess] = useState(false)

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

  const handleChangeArtist = (event) =>
    setArtist(event.target.value)

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

  const onCreateArtwork = (event) => {
    event.preventDefault()
    console.log(art)
    console.log(success)

    createArtwork(user, art)
      .then((res) => {
        console.log(res.data.artwork)
      })
      .then(() =>
        msgAlert({
          heading: 'Submit Artwork Success',
          message: submitArtworkSuccess,
          variant: 'success'
        }))
      .catch((error) => {
        msgAlert({
          heading: 'Submit Art Failed with error: ' + error.message,
          message: submitArtworkFailure,
          variant: 'error'
        })
      })
      .finally(() => {
        setArtist('')
        setTitle('')
        setImageUrl('')
        setReleaseDate('')
        setMedium('')
        setArtistRoyalty('')
        setCuratorRoyalty('')
        setExhibitionHistory('')
        setPublishingHistory('')
        setProvenance('')
        setNotes('')
      })
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
              id='artist-required'
              label='Artist'
              variant='outlined'
              color='primary'
              value={artist}
              onChange={handleChangeArtist}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs={5} md={3} lg={2}>
            <TextField
              required
              id='title-required'
              label='Title'
              variant='outlined'
              color='primary'
              value={title}
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
              id='imageUrl-required'
              label='ImageUrl'
              variant='outlined'
              color='primary'
              value={imageUrl}
              onChange={handleChangeImageUrl}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs={5} md={3} lg={2}>
            <TextField
              required
              id='releaseDate-required'
              label='ReleaseDate'
              variant='outlined'
              color='primary'
              value={releaseDate}
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
              id='medium-required'
              label='Medium'
              variant='outlined'
              color='primary'
              value={medium}
              onChange={handleChangeMedium}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs={5} md={3} lg={2}>
            <TextField
              required
              id='artistRoyalty-required'
              label='ArtistRoyalty'
              variant='outlined'
              color='primary'
              value={artistRoyalty}
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
              id='curatorRoyalty-required'
              label='CuratorRoyalty'
              variant='outlined'
              color='primary'
              value={curatorRoyalty}
              onChange={handleChangeCuratorRoyalty}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs={5} md={3} lg={2}>
            <TextField
              required
              id='provenance-required'
              label='Provenance'
              variant='outlined'
              color='primary'
              value={provenance}
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
              id='exhibitionHistory-required'
              label='ExhibitionHistory'
              variant='outlined'
              color='primary'
              value={exhibitionHistory}
              onChange={handleChangeExhibitionHistory}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs={5} md={3} lg={2}>
            <TextField
              id='publishingHistory-required'
              label='PublishingHistory'
              variant='outlined'
              color='primary'
              value={publishingHistory}
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
              id='notes-required'
              label='Notes'
              variant='outlined'
              color='primary'
              value={notes}
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
            <Button variant='contained' type='submit' onClick={onCreateArtwork}>
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