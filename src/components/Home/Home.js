import { Typography, Container } from '@mui/material'
import React from 'react'
import background from '../../images/Jose-Parla-Studio-Yellowtrace-54.jpeg'
import CarouselComp from './CarouselComponent'

const Home = () => {
  return (
    <Container style={{
      height: '100vh',
      width: '100vw',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      maxWidth: '100%',
      paddingTop: '100px'
    }}>
      <Typography
        style={{ fontWeight: '100', padding: '20px' }}
        variant='h4'
        align='center'
        color='white'
        gutterBottom>
        Featured Artwork by our Iconic Artists
      </Typography>
      <CarouselComp />
    </Container>
  )
}

export default Home
