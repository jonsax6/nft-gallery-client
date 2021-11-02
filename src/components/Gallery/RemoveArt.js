import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { removeArtwork, showArtwork } from '../../api/artwork'
import {
  removeArtworkFailure,
  removeArtworkSuccess
} from '../AutoDismissAlert/messages'
import { Typography, Grid, Button, Box, Card, CardContent } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const RemoveArt = ({ msgAlert, user }) => {
  const { id } = useParams()
  const [card, setCard] = useState(null)
  const [artist, setArtist] = useState(card ? card.artist : '')
  const [title, setTitle] = useState(card ? card.title : '')
  const [imageUrl, setImageUrl] = useState(card ? card.imageUrl : '')
  const [releaseDate, setReleaseDate] = useState(card ? card.releaseDate : '')
  const [medium, setMedium] = useState(card ? card.medium : '')
  const [artistRoyalty, setArtistRoyalty] = useState(
    card ? card.artistRoyalty : ''
  )
  const [curatorRoyalty, setCuratorRoyalty] = useState(
    card ? card.curatorRoyalty : ''
  )
  const [provenance, setProvenance] = useState(card ? card.provenance : '')
  const [exhibitionHistory, setExhibitionHistory] = useState(
    card ? card.exhibitionHistory : ''
  )
  const [publishingHistory, setPublishingHistory] = useState(
    card ? card.publishingHistory : ''
  )
  const [notes, setNotes] = useState(card ? card.notes : '')
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

  useEffect(() => {
    showArtwork(id).then((res) => {
      const art = res.data.artwork
      setArtist(art.artist)
      setTitle(art.title)
      setImageUrl(art.imageUrl)
      setReleaseDate(art.releaseDate)
      setMedium(art.medium)
      setArtistRoyalty(art.artistRoyalty)
      setCuratorRoyalty(art.curatorRoyalty)
      setProvenance(art.provenance)
      setExhibitionHistory(art.exhibitionHistory)
      setNotes(art.notes)
    })
  }, [id])

  const onRemoveArtwork = (event) => {
    if (event) {
      event.preventDefault()
    }

    removeArtwork(id, user)
      .then(() =>
        msgAlert({
          heading: 'Remove Artwork Success',
          message: removeArtworkSuccess,
          variant: 'success'
        })
      )
      .catch((error) => {
        msgAlert({
          heading: 'Remove Art Failed with error: ' + error.message,
          message: removeArtworkFailure,
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
      onRemoveArtwork()
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
                  <DeleteIcon
                    sx={{ color: 'white', marginRight: '10px', height: '30px' }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant='h5'>Remove from Collection</Typography>
                </Grid>
              </Grid>
              <Grid container style={{ padding: '20px' }}>
                <Grid item xs={12}>
                  <Typography>Artist: {artist}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Title: {title}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>ImageUrl: {imageUrl}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>release Date: {releaseDate}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Medium: {medium}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Artist Royalty: {artistRoyalty}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Curator Royalty: {curatorRoyalty}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Provenance: {provenance}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Exhibition History: {exhibitionHistory}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Publishing History: {publishingHistory}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Notes: {notes}</Typography>
                </Grid>
                <Grid container>
                  <Grid item xs={10} md={6} style={{ marginTop: '20px' }}>
                    <Button
                      variant='contained'
                      color='error'
                      type='submit'
                      onClick={onRemoveArtwork}>
                      Confirm Removal
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

export default RemoveArt
