import React from 'react'
import { Typography, Container, Grid, Button } from '@mui/material'

// import { withRouter } from 'react-router-dom'

// const useStyles = makeStyles((theme) => ({
//   container: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6)
//   }
// }))

// const StatWrapper = styled('div')(
//   ({ theme }) => `
//   background-color: ${theme.palette.background.paper}
//   padding: ${theme.spacing(8, 0, 6)}`
// )

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
          <Grid container spacing={2} justifyContent='center'>
            <Grid item>
              <Button variant='contained' color='warning'>See All Artists</Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' color='warning'>Secondary Action</Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  )
}

export default Gallery
