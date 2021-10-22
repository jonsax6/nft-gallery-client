import React, { useState } from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import { signIn } from '../../api/auth'
import { signInSuccess, signInFailure } from '../AutoDismissAlert/messages'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

const SignIn_ = ({ msgAlert, setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleChangeEmail = (event) =>
    setEmail(event.target.value)

  const handleChangePassword = (event) =>
    setPassword(event.target.value)

  const onSignIn = (event) => {
    event.preventDefault()

    signIn({ email, password, history })
      .then((res) => setUser(res.data.user))
      .then(() =>
        msgAlert({
          heading: 'Sign In Success',
          message: signInSuccess,
          variant: 'success'
        })
      )
      .then(() => history.push('/'))
      .catch((error) => {
        setEmail('')
        setPassword('')
        msgAlert({
          heading: 'Sign In Failed with error: ' + error.message,
          message: signInFailure,
          variant: 'danger'
        })
      })
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <div></div>
          </Grid>
          <Grid item xs={10} md={6} lg={4} style={{ marginTop: '20px', marginLeft: '10px' }}>
            <Typography variant="h5">Sign In</Typography>
          </Grid>
          <Grid item xs>
            <div></div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <div></div>
          </Grid>
          <Grid item xs={10} md={6} lg={4} >
            <TextField
              required
              id='outlined-required'
              label='Email'
              variant='outlined'
              color='primary'
              onChange={handleChangeEmail}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs>
            <div></div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <div></div>
          </Grid>
          <Grid item xs={10} md={6} lg={4}>
            <TextField
              required
              id='outlined-required'
              label='Password'
              type='password'
              variant='outlined'
              color='primary'
              onChange={handleChangePassword}
              style={{ width: '100%', marginTop: '20px' }}
            />{' '}
          </Grid>
          <Grid item xs>
            <div></div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <div></div>
          </Grid>
          <Grid item xs={10} md={6} lg={4} style={{ marginTop: '20px', marginLeft: '10px' }}>
            <Button variant='contained' type='submit' onClick={onSignIn}>Sign In</Button>
          </Grid>
          <Grid item xs>
            <div></div>
          </Grid>
        </Grid>
      </Box>

      {/* <Grid container spacing={1} style={{ margin: 'center' }}>
        <Box sx={{ flexGrow: 1, marginTop: '25px' }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                required
                id='outlined-required'
                label='Email'
                variant='outlined'
                color='secondary'
                style={{ width: '100%' }}
              />{' '}
            </Grid>
            <Grid item xs={8}>
              <TextField
                id='outlined-password-input'
                label='Password'
                type='password'
                variant='outlined'
                style={{ width: '100%' }}
              />{' '}
            </Grid>
          </Grid>
        </Box>
      </Grid> */}
    </>
  )
}

export default SignIn_
