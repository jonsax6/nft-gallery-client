import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { signIn, signUp } from '../../api/auth'
import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

const SignUp = ({ msgAlert, setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const history = useHistory()

  const handleChangeEmail = (event) =>
    setEmail(event.target.value)

  const handleChangePassword = (event) =>
    setPassword(event.target.value)

  const handleChangePasswordConfirmation = (event) =>
    setPasswordConfirmation(event.target.value)

  const onSignUp = (event) => {
    event.preventDefault()

    signUp({ email, password, passwordConfirmation })
      .then(() => signIn({ email, password }))
      .then((res) => setUser(res.data.user))
      .then(() =>
        msgAlert({
          heading: 'Sign Up Success',
          message: signUpSuccess,
          variant: 'success'
        })
      )
      .then(() => history.push('/'))
      .catch((error) => {
        setEmail('')
        setPassword('')
        setPasswordConfirmation('')
        msgAlert({
          heading: 'Sign Up Failed with error: ' + error.message,
          message: signUpFailure,
          variant: 'error'
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
          <Grid
            item
            xs={10}
            md={6}
            lg={4}
            style={{ marginTop: '20px', marginLeft: '10px', color: 'white' }}>
            <Typography variant='h5'>Sign Up</Typography>
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
              id='email'
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
              id='password'
              label='Password'
              type='password'
              variant='outlined'
              color='primary'
              autoComplete='new-password'
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
          <Grid item xs={10} md={6} lg={4}>
            <TextField
              required
              id='passwordConfirmation'
              label='Password Confirmation'
              type='password'
              variant='outlined'
              color='primary'
              autoComplete='new-password'
              onChange={handleChangePasswordConfirmation}
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
          <Grid
            item
            xs={10}
            md={6}
            lg={4}
            style={{ marginTop: '20px', marginLeft: '10px' }}>
            <Button variant='contained' type='submit' onClick={onSignUp}>
              Sign Up
            </Button>
          </Grid>
          <Grid item xs>
            <div></div>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SignUp