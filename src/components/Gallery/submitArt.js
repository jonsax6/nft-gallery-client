import React, { useState, useEffect } from 'react'
import { createArtwork, showArtwork } from '../../api/artwork'
import { submitArtworkSuccess, submitArtworkFailure } from '../AutoDismissAlert/messages'
import {
  Typography,
  Grid,
  Button,
  Box,
  Card,
  CardContent
} from '@mui/material'
import TextField from '@mui/material/TextField'
import AccountCircle from '@mui/icons-material/AccountCircle'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import HttpIcon from '@mui/icons-material/Http'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import PaletteIcon from '@mui/icons-material/Palette'
import EventIcon from '@mui/icons-material/Event'
import HistoryIcon from '@mui/icons-material/History'
import PublishIcon from '@mui/icons-material/Publish'
import NoteIcon from '@mui/icons-material/Note'
import TextFieldComponent from '../TextField/TextFieldComponent'

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
      <Grid style={{ marginTop: '50px' }} container justify='center'>
        <Grid item xs>
          <div></div>
        </Grid>
        <Grid item xs={11} sm={11} md={6}>
          <Card style={{ backgroundColor: 'gray' }}>
            <CardContent style={{ color: 'white' }}>
              <Typography variant='h5'>Submit Artwork</Typography>
              <Grid container>
                <Grid item xs={12}>
                  <TextFieldComponent
                    required={true}
                    id={'artist'}
                    label={'Artist'}
                    icon={<AccountCircle sx={{ color: 'white' }} />}
                    value={artist}
                    onChange={handleChangeArtist}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldComponent
                    required={true}
                    id={'title'}
                    label={'Title'}
                    icon={<ArtTrackIcon sx={{ color: 'white' }} />}
                    value={title}
                    onChange={handleChangeTitle}
                  />
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'imageUrl'}
                      label={'Image URL'}
                      icon={<HttpIcon sx={{ color: 'white' }} />}
                      value={imageUrl}
                      onChange={handleChangeImageUrl}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'releaseDate'}
                      label={'Release Date'}
                      icon={<EventIcon sx={{ color: 'white' }} />}
                      value={releaseDate}
                      onChange={handleChangeReleaseDate}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'medium'}
                      label={'Medium'}
                      icon={<PaletteIcon sx={{ color: 'white' }} />}
                      value={medium}
                      onChange={handleChangeMedium}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'artistRoyalty'}
                      label={'Artist Royalty'}
                      icon={<MonetizationOnIcon sx={{ color: 'white' }} />}
                      value={artistRoyalty}
                      onChange={handleChangeArtistRoyalty}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'curatorRoyalty'}
                      label={'Curator Royalty'}
                      icon={<MonetizationOnIcon sx={{ color: 'white' }} />}
                      value={curatorRoyalty}
                      onChange={handleChangeCuratorRoyalty}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'provenance'}
                      label={'Provenance'}
                      icon={<HttpIcon sx={{ color: 'white' }} />}
                      value={provenance}
                      onChange={handleChangeProvenance}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      id={'exhibitionHistory'}
                      label={'Exhibition History'}
                      icon={<HistoryIcon sx={{ color: 'white' }} />}
                      value={exhibitionHistory}
                      onChange={handleChangeExhibitionHistory}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      id={'publishingHistory'}
                      label={'Publishing History'}
                      icon={<PublishIcon sx={{ color: 'white' }} />}
                      value={publishingHistory}
                      onChange={handleChangePublishingHistory}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextFieldComponent
                      id={'notes'}
                      label={'Notes'}
                      icon={<NoteIcon sx={{ color: 'white' }} />}
                      value={notes}
                      onChange={handleChangeNotes}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={10}
                    md={6}
                    style={{ marginTop: '20px' }}>
                    <Button
                      variant='contained'
                      type='submit'
                      onClick={onCreateArtwork}>
                      Submit Artwork
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <div></div>
        </Grid>
      </Grid>
    </>
  )
}

export default SubmitArt