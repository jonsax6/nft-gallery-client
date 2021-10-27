import React, { useEffect, useState } from 'react'
import {
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Modal,
  Fade,
  Backdrop,
  Box
} from '@mui/material'
import '../../App.css'
import { indexArtwork } from '../../api/artwork'
import ArtModal from './ArtModal'

// import { withRouter } from 'react-router-dom'

const Gallery = () => {
  const [cards, setCards] = useState([])
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  useEffect(() => {
    indexArtwork()
      .then((res) => {
        setCards(res.data.artwork)
        console.log(cards)
      })
  }, [])

  const [open, setOpen] = React.useState(false)
  const handleOpen = (i) => {
    console.log(index)
    setIndex(i)
    console.log(i)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  return (
    <div style={{ backgroundColor: '#424242' }}>
      <Container
        maxWidth='sm'
        sx={{
          padding: '8, 0, 6',
          marginTop: '50px'
        }}>
        <Typography
          style={{ fontWeight: '100', color: 'white' }}
          variant='h4'
          align='center'
          gutterBottom>
          All Artists
        </Typography>
        <Typography
          style={{ fontWeight: '100', color: 'white' }}
          variant='h6'
          align='center'
          paragraph>
          Exclusive works by iconic artists
        </Typography>
        <div>
          <Grid
            container
            spacing={2}
            justifyContent='center'
            sx={{ marginTop: '20px' }}></Grid>
        </div>
      </Container>
      <Container
        maxWidth='flex'
        sx={{
          padding: '20px 0'
        }}>
        <Grid container spacing={4}>
          {cards.map((card, i) => (
            <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '0',
                  margin: '0',
                  color: 'white',
                  backgroundColor: '#505050'
                }}>
                <CardMedia
                  sx={{
                    paddingTop: '92%' // 16:9 aspect ratio
                  }}
                  image={card.imageUrl}
                  title='Image Title'
                  onClick={(e) => handleOpen(i)}
                  onPointerOver={() => setHovered(true)}
                  onPointerOut={() => setHovered(false)}
                />
                <CardContent
                  sx={{
                    flexGrow: 1
                  }}>
                  <Typography gutterBottom variant='h5'>
                    {card.artist}
                  </Typography>
                  <Typography>
                    {`'${card.title}'`}
                  </Typography>{' '}
                </CardContent>
              </Card>
            </Grid>
          ))}
          {cards.length > 0 ? <ArtModal card={cards[index]} handleClose={handleClose} open={open}/> : <></>}
        </Grid>
      </Container>
    </div>
  )
}

export default Gallery
