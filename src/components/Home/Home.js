import { Typography, Container } from '@mui/material'
import React from 'react'
import background from '../../images/Jose-Parla-Studio-Yellowtrace-54.jpeg'

const Home = () => {
  return (
    <Container style={{
      height: '100vh',
      width: '100vw',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }}>
      <Typography
        style={{ fontWeight: '100', padding: '50px' }}
        variant='h4'
        align='center'
        color='white'
        gutterBottom>
        Featured Artists
      </Typography>
    </Container>
  )
}

export default Home