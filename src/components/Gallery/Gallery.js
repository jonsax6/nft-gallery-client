import React from 'react'
import { Typography, Container, Grid, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material'

// import { withRouter } from 'react-router-dom'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Gallery = () => {
  // const classes = StatWrapper()
  return (
    <>
      <Container
        maxWidth='sm'
        sx={{
          backgroundColor: 'background.paper',
          padding: '8, 0, 6',
          marginTop: '50px'
        }}>
        <Typography
          variant='h4'
          align='center'
          color='textPrimary'
          gutterBottom>
          All Artists
        </Typography>
        <Typography variant='h6' align='center' color='textSecondary' paragraph>
          Exclusive works by iconic artists
        </Typography>
        <div>
          <Grid container spacing={2} justifyContent='center' sx={{ marginTop: '20px' }}>
            <Grid item>
              <Button variant='contained' color='warning'>See All Artists</Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' color='warning'>Secondary Action</Button>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="md"
        sx={{
          padding: '20px 0'
        }}>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid
              item
              key={card}
              xs={12}
              sm={6}
              md={4}
            >
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardMedia
                  sx={{
                    paddingTop: '56.25%' // 16:9 aspect ratio
                  }}
                  image="https://source.unsplash.com/random"
                  title="Image Title"
                />
                <CardContent sx={{
                  flexGrow: 1
                }}>
                  <Typography gutterBottom variant="h6">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card use this section to describe the content
                  </Typography>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Request Price</Button>

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
