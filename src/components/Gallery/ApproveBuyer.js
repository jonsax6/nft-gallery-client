import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router'
import Web3 from 'web3'
import Zyzygy from '../../abis/Zyzygy.json'
import TextFieldComponent from '../TextField/TextFieldComponent'
import { Typography, Grid, Button, Card, CardContent } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const ApproveBuyer = ({ account }) => {
  const [buyerAccount, setBuyerAccount] = useState('')
  const { contractAddress } = useParams()
  const { lastMinted } = useParams()
  const history = useHistory()

  const web3 = new Web3(Web3.givenProvider)
  const ZyzygyContract = Zyzygy.abi
  const Instance = new web3.eth.Contract(ZyzygyContract, contractAddress)

  const handleChangeBuyerAccount = (event) =>
    setBuyerAccount(event.target.value)

  const onApprove = async () => {
    console.log('clicked onApprove...')
    console.log(contractAddress)
    console.log(lastMinted)
    console.log(buyerAccount)
    console.log(account)
    await Instance.methods
      .approve(buyerAccount, lastMinted)
      .send({ from: account })
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
                  <Typography variant='h5'>Approve Buyer Account</Typography>
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