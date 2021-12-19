import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router'
import { approveBuyerSuccess } from '../AutoDismissAlert/messages'
import Web3 from 'web3'
import Zyzygy from '../../abis/Zyzygy.json'
import TextFieldComponent from '../TextField/TextFieldComponent'
import { Typography, Grid, Button, Card, CardContent } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import GavelIcon from '@mui/icons-material/Gavel'

const ApproveBuyer = ({ account, msgAlert }) => {
  const [buyerAccount, setBuyerAccount] = useState('')
  const [contractAddress, setContractAddress] = useState('')
  const history = useHistory()

  const web3 = new Web3(Web3.givenProvider)
  const ZyzygyContract = Zyzygy.abi
  const Instance = new web3.eth.Contract(ZyzygyContract, contractAddress)

  const handleChangeBuyerAccount = (event) =>
    setBuyerAccount(event.target.value)

  const handleChangeContractAddress = (event) =>
    setContractAddress(event.target.value)

  const onApprove = () => {
    console.log('clicked onApprove...')
    console.log(contractAddress)
    console.log(buyerAccount)
    console.log(account)
    Instance.methods
      .setApprovalForAll(buyerAccount, true)
      .send({ from: account })
      .then(() =>
        msgAlert({
          heading: 'Approved Buyer for All Success.',
          message: approveBuyerSuccess,
          variant: 'success',
        })
      )
      .then(() => history.push('/gallery'))
      .catch((error) => {
        msgAlert({
          heading: 'Approved Buyer Failed',
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
                  <AccountCircleIcon
                    sx={{ color: 'white', marginRight: '10px', height: '30px' }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant='h5'>Approve Buyer For All NFTs</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <TextFieldComponent
                    required={true}
                    id={'buyerAccount'}
                    label={'Buyer Account'}
                    icon={<AccountBalanceWalletIcon sx={{ color: 'white' }} />}
                    variant={'outlined'}
                    value={buyerAccount}
                    onChange={handleChangeBuyerAccount}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldComponent
                    required={true}
                    id={'contractAddress'}
                    label={'Contract Address'}
                    icon={<GavelIcon sx={{ color: 'white' }} />}
                    variant={'outlined'}
                    value={contractAddress}
                    onChange={handleChangeContractAddress}
                  />
                </Grid>
                <Grid container>
                  <Grid item xs={10} md={6} style={{ marginTop: '20px' }}>
                    <Button
                      variant='contained'
                      type='submit'
                      onClick={onApprove}>
                      Approve Buyer
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

export default ApproveBuyer
