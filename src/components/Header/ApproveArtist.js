import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { createArtist } from '../../api/artists'
import { approveArtistSuccess } from '../AutoDismissAlert/messages'
import TextFieldComponent from '../TextField/TextFieldComponent'
import { Typography, Grid, Button, Card, CardContent } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import FactCheckTwoToneIcon from '@mui/icons-material/FactCheckTwoTone'
import AlternateEmailTwoToneIcon from '@mui/icons-material/AlternateEmailTwoTone'
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone'
import { Icon } from '@iconify/react'

const ApproveArtist = ({ msgAlert, user }) => {
  const [artistName, setArtistName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [account, setAccount] = useState('')
  const [approved, setApproved] = useState('')
  const history = useHistory()

  const artist = {
    name: artistName,
    phone: phone,
    email: email,
    account: account,
    approved: approved
  }

  const handleChangeArtistName = (event) => setArtistName(event.target.value)

  const handleChangePhone = (event) => setPhone(event.target.value)

  const handleChangeEmail = (event) => setEmail(event.target.value)

  const handleChangeAccount = (event) => setAccount(event.target.value)

  const handleChangeApproved = (event) => setApproved(event.target.value)

  const onApprove = () => {
    console.log('approving artist for admin...')
    createArtist(user, artist)
      .then(() =>
        msgAlert({
          heading: 'Approve Artist Success',
          message: approveArtistSuccess,
          variant: 'success',
        })
      )
      .then(() => history.push('/gallery'))
      .catch((error) => {
        msgAlert({
          heading: 'Approve Artist Failed',
          message: error.message,
          variant: 'error',
        })
      })
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
                  <CheckCircleOutlineTwoToneIcon
                    sx={{ color: 'white', marginRight: '10px', height: '30px' }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant='h5'>
                    Approve Artist for Zyzygy Art
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <TextFieldComponent
                    required={true}
                    id={'ArtistName'}
                    label={'Artist Name'}
                    icon={<AccountCircleIcon sx={{ color: 'white' }} />}
                    variant={'outlined'}
                    value={artistName}
                    onChange={handleChangeArtistName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldComponent
                    required={true}
                    id={'phoneNumber'}
                    label={'Phone Number'}
                    icon={<ContactPhoneIcon sx={{ color: 'white' }} />}
                    variant={'outlined'}
                    value={phone}
                    onChange={handleChangePhone}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldComponent
                    required={true}
                    id={'email'}
                    label={'Email'}
                    icon={<AlternateEmailTwoToneIcon sx={{ color: 'white' }} />}
                    variant={'outlined'}
                    value={email}
                    onChange={handleChangeEmail}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldComponent
                    required={true}
                    id={'ethAccount'}
                    label={'ETH Account'}
                    icon={
                      <Icon
                        icon='teenyicons:ethereum-solid'
                        width='22'
                        style={{ color: 'white' }}
                      />
                    }
                    variant={'outlined'}
                    value={account}
                    onChange={handleChangeAccount}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldComponent
                    required={true}
                    id={'approved'}
                    label={'Approved'}
                    icon={<FactCheckTwoToneIcon sx={{ color: 'white' }} />}
                    variant={'outlined'}
                    value={approved}
                    onChange={handleChangeApproved}
                  />
                </Grid>
                <Grid container>
                  <Grid item xs={10} md={6} style={{ marginTop: '20px' }}>
                    <Button
                      variant='contained'
                      type='submit'
                      onClick={onApprove}>
                      Approve Artist
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
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

export default ApproveArtist
