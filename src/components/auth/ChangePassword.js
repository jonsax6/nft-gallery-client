import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { changePassword } from '../../api/auth'
import {
  changePasswordSuccess,
  changePasswordFailure
} from '../AutoDismissAlert/messages'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import {
  CardContent,
  Typography,
  Card
} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import TextFieldComponent from '../TextField/TextFieldComponent'
import VpnKeyIcon from '@mui/icons-material/VpnKey'

const ChangePassword = ({ msgAlert, user }) => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const history = useHistory()

  const handleChangeOldPassword = (event) =>
    setOldPassword(event.target.value)

  const handleChangeNewPassword = (event) =>
    setNewPassword(event.target.value)

  const onChangePassword = (event) => {
    if (event) {
      event.preventDefault()
    }

    changePassword({ oldPassword, newPassword }, user)
      .then(() =>
        msgAlert({
          heading: 'Change Password Success',
          message: changePasswordSuccess,
          variant: 'success'
        })
      )
      .then(() => history.push('/'))
      .catch((error) => {
        setOldPassword('')
        setNewPassword('')
        msgAlert({
          heading: 'Change Password Failed',
          message: error.message,
          variant: 'error'
        })
      })
  }

  const handleKeypress = (event) => {
    // it triggers by pressing the enter key
    if (event.keyCode === 13 || event.which === 13) {
      onChangePassword()
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
                  <VpnKeyIcon
                    sx={{ color: 'white', marginRight: '10px', height: '30px' }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant='h5'>Change Password</Typography>
                </Grid>
              </Grid>{' '}
              <TextFieldComponent
                required={true}
                id={'oldPassword'}
                label={'Old Password'}
                icon={<LockIcon sx={{ color: 'white' }} />}
                value={oldPassword}
                type={'password'}
                onChange={handleChangeOldPassword}
              />
              <TextFieldComponent
                required={true}
                id={'newPassword'}
                label={'New Password'}
                icon={<LockIcon sx={{ color: 'white' }} />}
                value={newPassword}
                type={'password'}
                onChange={handleChangeNewPassword}
                keyPress={handleKeypress}
              />
              <Button
                style={{ marginTop: '20px' }}
                variant='contained'
                type='submit'
                onClick={onChangePassword}>
                Update
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

export default ChangePassword
