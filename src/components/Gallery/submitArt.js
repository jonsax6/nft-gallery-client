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
  const [artist, setArtist] = useState('')
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [medium, setMedium] = useState('')
  const [artistRoyalty, setArtistRoyalty] = useState('')
  const [curatorRoyalty, setCuratorRoyalty] = useState('')
  const [provenance, setProvenance] = useState('')
  const [exhibitionHistory, setExhibitionHistory] = useState('')
  const [publishingHistory, setPublishingHistory] = useState('')
  const [notes, setNotes] = useState('')
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
    if (event) {
      event.preventDefault()
    }

    createArtwork(user, art)
      .then((res) => {
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

  const handleKeypress = (event) => {
    // it triggers by pressing the enter key
    if (event.keyCode === 13 || event.which === 13) {
      onCreateArtwork()
    }
  }

  return (
    <>
      <Grid style={{ paddingTop: '150px' }} container justify='center'>
        <Grid item xs>
          <div></div>
        </Grid>
        <Grid item xs={11} sm={9} md={8} lg={6} xl={4}>
          <Card style={{ backgroundColor: 'gray' }}>
            <CardContent style={{ color: 'white' }}>
              <Grid container>
                <Grid item>
                  <PublishIcon
                    sx={{ color: 'white', marginRight: '10px', height: '30px' }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant='h5'>Submit Your Artwork</Typography>
                </Grid>
              </Grid>
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
                      keyPress={handleKeypress}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={10} md={6} style={{ marginTop: '20px' }}>
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