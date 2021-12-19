import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router'
import Web3 from 'web3'
import Zyzygy from '../../abis/Zyzygy.json'
import TextFieldComponent from '../TextField/TextFieldComponent'
import { Typography, Grid, Button, Card, CardContent } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import TokenIcon from '@mui/icons-material/Token'

const BuyNft = ({ account }) => {
  const { contractAddress } = useParams()
  const { lastMinted } = useParams()
  const { price } = useParams()
  const [buyerName, setBuyerName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const history = useHistory()

  const web3 = new Web3(Web3.givenProvider)
  const ZyzygyContract = Zyzygy.abi
  const Instance = new web3.eth.Contract(ZyzygyContract, contractAddress)

  const handleChangeBuyerName = (event) =>
    setBuyerName(event.target.value)

  const handleChangePhoneNumber = (event) =>
    setPhoneNumber(event.target.value)

  const onBuy = async (i) => {
    console.log(`purchasing NFT ${lastMinted}...`)
    try {
      const owner = await Instance.methods.ownerOf(lastMinted).call()
      const buyNFT = await Instance.methods
        .transferFrom(
          owner,
          account,
          lastMinted,
          buyerName,
          phoneNumber
        )
        .send({
          from: account,
          value: web3.utils.toWei(price.toString(), 'ether')
        })
      console.log(buyNFT)
    } catch (err) {
      console.log(err)
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
                  <TokenIcon
                    sx={{ color: 'white', marginRight: '10px', height: '30px' }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant='h5'>Buy NFT {lastMinted}</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <TextFieldComponent
                    required={true}
                    id={'buyerName'}
                    label={'Buyer Name'}
                    icon={<AccountCircleIcon sx={{ color: 'white' }} />}
                    variant={'outlined'}
                    value={buyerName}
                    onChange={handleChangeBuyerName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldComponent
                    required={true}
                    id={'phoneNumber'}
                    label={'Phone Number'}
                    icon={<ContactPhoneIcon sx={{ color: 'white' }} />}
                    variant={'outlined'}
                    value={phoneNumber}
                    onChange={handleChangePhoneNumber}
                  />
                </Grid>
                <Grid container>
                  <Grid item xs={10} md={6} style={{ marginTop: '20px' }}>
                    <Button variant='contained' type='submit' onClick={onBuy}>
                      Buy
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

export default BuyNft
