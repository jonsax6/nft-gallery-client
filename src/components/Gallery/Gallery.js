import React from 'react'
import { Typography, Container, Grid, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material'
import '../../App.css'

// import { withRouter } from 'react-router-dom'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Gallery = () => {
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
          color='white'
          gutterBottom>
          All Artists
        </Typography>
        <Typography
          style={{ fontWeight: '100' }}
          variant='h6'
          align='center'
          color='white'
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
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
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
                    paddingTop: '56.25%' // 16:9 aspect ratio
                  }}
                  image='https://source.unsplash.com/random'
                  title='Image Title'
                />
                <CardContent
                  sx={{
                    flexGrow: 1
                  }}>
                  <Typography gutterBottom variant='h6'>
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card use this section to describe the
                    content
                  </Typography>
                  <CardActions>
                    <Button size='small' color='warning'>
                      View
                    </Button>
                    <Button size='small' color='warning'>
                      Request Price
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Gallery
