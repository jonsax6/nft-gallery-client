import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router'
import { updateArtwork, showArtwork } from '../../api/artwork'
import {
  updateArtworkSuccess,
  setPriceSuccess
} from '../AutoDismissAlert/messages'
import Web3 from 'web3'
import Zyzygy from '../../abis/Zyzygy.json'
import TextFieldComponent from '../TextField/TextFieldComponent'
import {
  Typography,
  Grid,
  Button,
  Card,
  CardContent
} from '@mui/material'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import { Icon } from '@iconify/react'

const SetPrice = ({ msgAlert, user, account }) => {
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [lastMinted, setLastMinted] = useState('')
  const [contractAddress, setContractAddress] = useState('')
  const { id } = useParams()
  const history = useHistory()

  const web3 = new Web3(Web3.givenProvider)
  const ZyzygyContract = Zyzygy.abi
  const Instance = new web3.eth.Contract(ZyzygyContract, contractAddress)

  useEffect(() => {
    showArtwork(id).then((res) => {
      const art = res.data.artwork
      setTitle(art.title)
      setPrice(art.price)
      setContractAddress(art.contractAddress)
      setLastMinted(art.lastMinted)
    })
  }, [id])

  const handleChangePrice = (event) =>
    setPrice(event.target.value)

  const onSetPrice = () => {
    console.log(`setting buy price for: ${lastMinted}...`)
    console.log(contractAddress)

    const priceInEth = web3.utils.toWei(price.toString(), 'ether')
    const updatePrice = {
      price: price
    }
    try {
      Instance.methods
        .setPrice(lastMinted, priceInEth)
        .send({ from: account })
        .then(() => {
          updateArtwork(id, updatePrice, user)
            .then(() =>
              msgAlert({
                heading: 'Set Price Success',
                message: setPriceSuccess,
                variant: 'success',
              })
            )
            .catch((error) => {
              msgAlert({
                heading: 'Set Price Failed',
                message: error.message,
                variant: 'error',
              })
            })
        })
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
                  <LocalOfferIcon
                    sx={{ color: 'white', marginRight: '10px', height: '30px' }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant='h5'>
                    Set Price for NFT {lastMinted}: &apos;{title}&apos;
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <TextFieldComponent
                    required={true}
                    id={'tokenPrice'}
                    label={'Token Price'}
                    icon={
                      <Icon
                        icon='teenyicons:ethereum-solid'
                        width='22'
                        style={{ marginRight: '10px', color: 'white' }}
                      />
                    }
                    variant={'outlined'}
                    value={price}
                    onChange={handleChangePrice}
                  />
                </Grid>
                <Grid container>
                  <Grid item xs={10} md={6} style={{ marginTop: '20px' }}>
                    <Button
                      variant='contained'
                      type='submit'
                      onClick={onSetPrice}>
                      Set Price
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

export default SetPrice
