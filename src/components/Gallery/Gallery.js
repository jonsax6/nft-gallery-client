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
    <>
      <Container
        maxWidth='sm'
        sx={{
          padding: '8, 0, 6',
          marginTop: '50px'
        }}>
        <Typography
          style={{ fontWeight: '100' }}
          variant='h4'
          align='center'
          gutterBottom>
          All Artists
        </Typography>
        <Typography
          style={{ fontWeight: '100' }}
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
            sx={{ marginTop: '20px' }}>
            {/* <Grid item>
              <Button variant='contained' color='warning'>See All Artists</Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' color='warning'>Secondary Action</Button>
            </Grid> */}
          </Grid>
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
                  backgroundColor: 'gray'
                }}>
                <CardMedia
                  sx={{
                    paddingTop: '92%' // 16:9 aspect ratio
                  }}
                  image={card.imageUrl}
                  title='Image Title'
                />
                <CardContent
                  sx={{
                    flexGrow: 1
                  }}>
                  <Typography gutterBottom variant='h5'>
                    {card.artist}
                  </Typography>
                  <Typography gutterBottom paragraph>
                    {card.notes}
                  </Typography>{' '}
                  <Typography variant='h6'>Medium</Typography>
                  <Typography>{card.medium}</Typography>{' '}
                  <CardActions>
                    <Button onClick={(e) => handleOpen(i)}>Info...</Button>
                    <Button size='small' color='warning'>
                      Price
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
          {cards.length > 0 ? <ArtModal card={cards[index]} handleClose={handleClose} open={open} /> : <></>}
        </Grid>
      </Container>
    </>
  )
}

export default Gallery
