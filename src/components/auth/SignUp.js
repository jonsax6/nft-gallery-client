import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { signIn, signUp } from '../../api/auth'
import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Typography, Card, CardContent, InputAdornment } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'

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
      <Grid style={{ marginTop: '50px' }} container justify='center'>
        <Grid item xs>
          <div></div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card style={{ backgroundColor: 'gray' }}>
            <CardContent style={{ color: 'white' }}>
              <Typography variant="h5">
                Register for an Account
              </Typography>
              <TextField
                required
                id='email'
                label='Email'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle sx={{ color: 'white' }} />
                    </InputAdornment>
                  ),
                  style: { color: 'white' }
                }}
                variant='outlined'
                color='primary'
                onChange={handleChangeEmail}
                sx={{
                  width: '100%',
                  marginTop: '40px',
                  '& label.Mui-focused': {
                    color: 'green'
                  },
                  '& label': {
                    color: 'white'
                  },
                  '&:hover label': {
                    color: '#5ba7ff'
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white'
                    },
                    '&:hover fieldset': {
                      borderColor: '#5ba7ff'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'green'
                    }
                  }
                }}
              />{' '}
              <TextField
                required
                id='password'
                label='Password'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: 'white' }} />
                    </InputAdornment>
                  ),
                  style: { color: 'white' }
                }}
                type='password'
                variant='outlined'
                color='primary'
                onChange={handleChangePassword}
                sx={{
                  width: '100%',
                  marginTop: '20px',
                  '& label.Mui-focused': {
                    color: 'green'
                  },
                  '& label': {
                    color: 'white'
                  },
                  '&:hover label': {
                    color: '#5ba7ff'
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white'
                    },
                    '&:hover fieldset': {
                      borderColor: '#5ba7ff'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'green'
                    }
                  }
                }}
              />{' '}
              <TextField
                required
                id='passwordConfirmation'
                label='Password Confirmation'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{
                        color: 'white'
                      }} />
                    </InputAdornment>
                  ),
                  style: { color: 'white' }
                }}
                type='password'
                variant='outlined'
                color='primary'
                autoComplete='new-password'
                onChange={handleChangePasswordConfirmation}
                sx={{
                  width: '100%',
                  marginTop: '20px',
                  '& label.Mui-focused': {
                    color: 'green'
                  },
                  '& label': {
                    color: 'white'
                  },
                  '&:hover label': {
                    color: '#5ba7ff'
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white'
                    },
                    '&:hover fieldset': {
                      borderColor: '#5ba7ff'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'green'
                    }
                  }
                }}
              />{' '}
              <Button
                style={{ marginTop: '20px', marginLeft: '10px' }}
                variant='contained' type='submit'
                onClick={onSignUp}>
                Register
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

export default SignUp