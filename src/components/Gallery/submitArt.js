import React, { useState, useEffect } from 'react'
import { createArtwork, showArtwork } from '../../api/artwork'
import { useHistory } from 'react-router-dom'
import { submitArtworkSuccess } from '../AutoDismissAlert/messages'
import {
  Typography,
  Grid,
  Button,
  Card,
  CardContent
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import HttpIcon from '@mui/icons-material/Http'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import PaletteIcon from '@mui/icons-material/Palette'
import EventIcon from '@mui/icons-material/Event'
import HistoryIcon from '@mui/icons-material/History'
import PublishIcon from '@mui/icons-material/Publish'
import NoteIcon from '@mui/icons-material/Note'
import GavelIcon from '@mui/icons-material/Gavel'
import TextFieldComponent from '../TextField/TextFieldComponent'

const SubmitArt = ({ msgAlert, user }) => {
  const [artist, setArtist] = useState(null)
  const [title, setTitle] = useState(null)
  const [price, setPrice] = useState(null)
  const [image, setImage] = useState(null)
  const [displayImageUrl, setDisplayImageUrl] = useState(null)
  const [releaseDate, setReleaseDate] = useState(null)
  const [medium, setMedium] = useState(null)
  const [artistRoyalty, setArtistRoyalty] = useState(null)
  const [curatorRoyalty, setCuratorRoyalty] = useState(null)
  const [provenance, setProvenance] = useState(null)
  const [exhibitionHistory, setExhibitionHistory] = useState(null)
  const [publishingHistory, setPublishingHistory] = useState(null)
  const [notes, setNotes] = useState(null)
  const [contractAddress, setContractAddress] = useState(null)
  const history = useHistory()

  const art = {
    artist: artist,
    title: title,
    price: price,
    image: image,
    displayImageUrl: displayImageUrl,
    medium: medium,
    artistRoyalty: artistRoyalty,
    curatorRoyalty: curatorRoyalty,
    provenance: provenance,
    exhibitionHistory: exhibitionHistory,
    publishingHistory: publishingHistory,
    releaseDate: releaseDate,
    notes: notes,
    contractAddress: contractAddress,
  }

  const handleChangeArtist = (event) =>
    setArtist(event.target.value)

  const handleChangeTitle = (event) =>
    setTitle(event.target.value)

  const handleChangePrice = (event) =>
    setPrice(event.target.value)

  const handleChangeImage = (event) =>
    setImage(event.target.value)

  const handleChangeDisplayImageUrl = (event) =>
    setDisplayImageUrl(event.target.value)

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

  const handleChangeReleaseDate = (event) =>
    setReleaseDate(event.target.value)

  const handleChangeNotes = (event) =>
    setNotes(event.target.value)

  const handleChangeContractAddress = (event) =>
    setContractAddress(event.target.value)

  const onCreateArtwork = (event) => {
    if (event) {
      event.preventDefault()
    }

    createArtwork(user, art)
      .then((res) => {})
      .then(() =>
        msgAlert({
          heading: 'Submit Artwork Success',
          message: submitArtworkSuccess,
          variant: 'success'
        })
      )
      // .then(() => {
      //   mintArtwork(art)
      // })
      .then(() => history.push('/gallery'))
      .catch((error) => {
        msgAlert({
          heading: 'Submit Art Failed',
          message: error.message,
          variant: 'error'
        })
      })
      .finally(() => {
        setArtist('')
        setTitle('')
        setPrice('')
        setImage('')
        setDisplayImageUrl('')
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
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'title'}
                      label={'Title'}
                      icon={<ArtTrackIcon sx={{ color: 'white' }} />}
                      value={title}
                      onChange={handleChangeTitle}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={false}
                      id={'price'}
                      label={'Price (eth)'}
                      icon={<MonetizationOnIcon sx={{ color: 'white' }} />}
                      value={price}
                      onChange={handleChangePrice}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'image'}
                      label={'Image'}
                      icon={<HttpIcon sx={{ color: 'white' }} />}
                      value={image}
                      onChange={handleChangeImage}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'displayImgUrl'}
                      label={'Display Image Url'}
                      icon={<HttpIcon sx={{ color: 'white' }} />}
                      value={displayImageUrl}
                      onChange={handleChangeDisplayImageUrl}
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
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextFieldComponent
                      id={'contractAddress'}
                      label={'Contract Address'}
                      icon={<GavelIcon sx={{ color: 'white' }} />}
                      value={contractAddress}
                      onChange={handleChangeContractAddress}
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