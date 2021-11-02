import React, { useState } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { signIn } from '../../api/auth'
import { signInSuccess, signInFailure, missingEmail, missingPassword } from '../AutoDismissAlert/messages'
import { CardContent, Typography, Grid, Card, Button } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'
import TextFieldComponent from '../TextField/TextFieldComponent'
import LoginIcon from '@mui/icons-material/Login'
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
    if (event) {
      event.preventDefault()
    }

    if (email === '') {
      msgAlert({
        heading: 'email field is required. Cannot be empty',
        message: missingEmail,
        variant: 'error'
      })
    } else if (password === '') {
      msgAlert({
        heading: 'password field is required. Cannot be empty',
        message: missingPassword,
        variant: 'error'
      })
    } else {
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
  }

  const handleKeypress = (event) => {
    // it triggers by pressing the enter key
    if (event.keyCode === 13 || event.which === 13) {
      onSignIn()
    }
  }

  return (
    <>
      <Grid style={{ paddingTop: '150px' }} container justify='center'>
        <Grid item xs>
          <div></div>
        </Grid>
        <Grid item xs={11} sm={9} md={8} lg={6} xl={4}>
          <Card style={{ backgroundColor: 'gray' }}>
            <CardContent style={{ color: 'white' }}>
              <Grid container>
                <Grid item>
                  <LoginIcon
                    sx={{ color: 'white', marginRight: '10px', height: '30px' }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant='h5'>Login to Your Account</Typography>
                </Grid>
              </Grid>{' '}
              <TextFieldComponent
                required={true}
                id={'email'}
                label={'Email'}
                icon={<AccountCircle sx={{ color: 'white' }} />}
                value={email}
                type={'email'}
                onChange={handleChangeEmail}
              />
              <TextFieldComponent
                required={true}
                id={'password'}
                label={'Password'}
                icon={<LockIcon sx={{ color: 'white' }} />}
                value={password}
                type={'password'}
                onChange={handleChangePassword}
                keyPress={handleKeypress}
              />
              <Button
                style={{ marginTop: '20px' }}
                variant='contained'
                type='submit'
                onClick={onSignIn}>
                Sign In
              </Button>
              <Typography
                variant='h6'
                style={{ marginTop: '20px', marginBottom: '10px' }}>
                No account yet?
              </Typography>
              <Typography paragraph style={{ marginBottom: '20px' }}>
                Get the inside track on upcoming Releases, the newest
                collaborations and latest events, along with purchasing any of
                our works using Ethereum with the metamask chrome browser
                extension.
              </Typography>
              <NavLink
                style={{ marginTop: '50px', textDecoration: 'none' }}
                to='/sign-up'
                className='nav-link'>
                <Button color='success' variant='contained'>
                  Join Zyzygy studios
                </Button>
              </NavLink>
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
