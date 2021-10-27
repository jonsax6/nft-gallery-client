import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { signIn } from '../../api/auth'
import { signInSuccess, signInFailure } from '../AutoDismissAlert/messages'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { CardContent, Typography, InputAdornment, Card, Container } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'
import TextFieldComponent from '../TextField/TextFieldComponent'
// import background from '../../images/Jose-Parla-Studio-Yellowtrace-54.jpeg'

const SignIn = ({ msgAlert, setUser }) => {
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
          variant: 'error'
        })
      })
  }
  return (
    <>
      <Grid style={{ marginTop: '50px' }} container justify='center'>
        <Grid item xs>
          <div></div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card style={{ backgroundColor: 'gray' }}>
            <CardContent style={{ color: 'white' }}>
              <Typography variant="h5">
                Login
              </Typography>
              <TextFieldComponent
                required={true}
                id={'email'}
                label={'Email'}
                icon={<AccountCircle sx={{ color: 'white' }}/>}
                value={email}
                onChange={handleChangeEmail}
              />
              <TextFieldComponent
                required={true}
                id={'password'}
                label={'Password'}
                icon={<LockIcon sx={{ color: 'white' }}/>}
                value={password}
                onChange={handleChangePassword}
              />
              <Button
                style={{ marginTop: '20px', marginLeft: '10px' }}
                variant='contained' type='submit'
                onClick={onSignIn}>
                Sign In
              </Button>
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

export default SignIn
