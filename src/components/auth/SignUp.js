import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { signIn, signUp } from '../../api/auth'
import {
  signUpSuccess,
  signUpFailure,
  missingEmail,
  missingPassword,
  missingPasswordConfirmation
} from '../AutoDismissAlert/messages'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Typography, Card, CardContent } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'
import TextFieldComponent from '../TextField/TextFieldComponent'

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

    msgAlert({
      heading: 'passwords do not match'
    })

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
    } else if (passwordConfirmation === '') {
      msgAlert({
        heading: 'password confirmation field is required. Cannot be empty',
        message: missingPasswordConfirmation,
        variant: 'error'
      })
    } else {
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
              <TextFieldComponent
                required={true}
                id={'email'}
                label={'Email'}
                icon={<AccountCircle sx={{ color: 'white' }} />}
                variant={'outlined'}
                onChange={handleChangeEmail}
              />
              <TextFieldComponent
                required={true}
                id={'password'}
                label={'Password'}
                icon={<LockIcon sx={{ color: 'white' }} />}
                variant={'outlined'}
                type={'password'}
                onChange={handleChangePassword}
              />
              <TextFieldComponent
                required={true}
                id={'passwordConfirmation'}
                label={'Password Confirmation'}
                icon={<LockIcon sx={{ color: 'white' }} />}
                variant={'outlined'}
                type={'password'}
                onChange={handleChangePasswordConfirmation}
              />
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