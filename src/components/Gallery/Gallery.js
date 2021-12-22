import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Web3 from 'web3'
import {
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent
} from '@mui/material'
import '../../App.css'
import { indexArtwork, showArtwork } from '../../api/artwork'
import DataObjectIcon from '@mui/icons-material/DataObject'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ArtModal from './ArtModal'
import { useMediaQuery } from 'react-responsive'
import { Icon } from '@iconify/react'
import Zyzygy from '../../abis/Zyzygy.json'

// import { withRouter } from 'react-router-dom'

// we need a specific padding for xs screen size to avoid left side cutoff, so using media query
// these are the variables which will be selected by 'isPhone' in the below control flow statements
const phone = '32px'
const desktop = '8px'

const Gallery = ({ user, account }) => {
  const [cards, setCards] = useState([])
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [open, setOpen] = useState(false)
  const [tokenOwner, setTokenOwner] = useState('')
  const history = useHistory()

  const web3 = new Web3(Web3.givenProvider)
  const ZyzygyContract = Zyzygy.abi

  const isPhone = useMediaQuery({
    query: '(max-width: 600px)',
  })

  let mobileStyle

  if (isPhone) {
    mobileStyle = phone
  } else {
    mobileStyle = desktop
  }

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  useEffect(() => {
    indexArtwork().then((res) => {
      setCards(res.data.artwork)
    })
  }, [])

  const handleOpen = (i) => {
    setIndex(i)
    setOpen(true)
  }

  const getOwner = async (id, contract) => {
    const Instance = new web3.eth.Contract(ZyzygyContract, contract)
    const owner = await Instance.methods.ownerOf(id).call()
    console.log('owner: ', owner)
    return owner
  }

  const handleClose = () => setOpen(false)

  const onUpdate = (i) => {
    history.push(`/update/${cards[i]._id}`)
  }

  const onBuy = (i) => {
    history.push(`/buy/${cards[i].contractAddress}/${cards[i].lastMinted}/${cards[i]._id}/${cards[i].price}`)
  }

  const onRemove = (i) => {
    history.push(`/remove/${cards[i]._id}`)
  }

  const onApprove = (i) => {
    history.push(`/approve-buyer/${cards[i].contractAddress}/${cards[i].lastMinted}`)
  }

  const onSetPrice = (i) => {
    history.push(`/set-price/${cards[i]._id}`)
  }

  // let mintVal = await _contract.methods
  //   .mint(
  //     tokenId,
  //     web3.utils.toWei(TokenPrice.toString(), 'ether'),
  //     'hbvjhbghbhbasdasdasdadaad'
  //   )
  //   .send({
  //     from: accounts[0],
  //     value: web3.utils.toWei(TokenPrice.toString(), 'ether'),
  //   })

  return (
    <div style={{ backgroundColor: '#202020' }}>
      <Container
        maxWidth='sm'
        sx={{
          padding: '8, 0, 6',
          paddingTop: '100px',
        }}>
        <Typography
          style={{ fontWeight: '100', color: 'white', marginTop: '15px' }}
          variant='h4'
          align='center'
          gutterBottom>
          All Artists
        </Typography>
        <Typography
          style={{ fontWeight: '100', color: 'white' }}
          variant='h6'
          align='center'
          paragraph>
          Exclusive works by iconic artists
        </Typography>
        <div>
          <Grid
            container
            spacing={2}
            justifyContent='center'
            sx={{ marginTop: '20px' }}></Grid>
        </div>
      </Container>
      <Container
        maxWidth='flex'
        style={{ paddingRight: 0 }}
        sx={{
          padding: '20px 0',
        }}>
        <Grid container spacing={4}>
          {cards.map((card, i) => (
            <Grid
              item
              style={{ paddingLeft: mobileStyle, paddingTop: '10px' }}
              key={i}
              xs={12}
              sm={6}
              md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '0',
                  margin: '0',
                  color: 'white',
                  backgroundColor: '#404040',
                }}>
                <CardMedia
                  sx={{
                    paddingTop: '92%', // 16:9 aspect ratio
                  }}
                  image={card.displayImageUrl}
                  title={card.title}
                  onClick={(e) => handleOpen(i)}
                  onPointerOver={() => setHovered(true)}
                  onPointerOut={() => setHovered(false)}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                  }}>
                  <Typography gutterBottom variant='h5'>
                    {card.artist}
                  </Typography>
                  <Typography>{`'${card.title}'`}&nbsp;&nbsp;&nbsp;</Typography>
                  {user && user._id === card.owner ? (
                    <>
                      <Button
                        style={{ marginTop: '10px', marginRight: '10px' }}
                        size='small'
                        color='warning'
                        variant='outlined'
                        onClick={(e) => onUpdate(i)}>
                        <DataObjectIcon
                          sx={{
                            color: 'warning',
                            marginRight: '3px',
                            height: '20px',
                          }}
                        />
                        Update Artwork
                      </Button>
                      <Button
                        style={{ marginTop: '10px', marginRight: '10px' }}
                        size='small'
                        color='error'
                        variant='outlined'
                        onClick={(e) => onRemove(i)}>
                        <DeleteOutlineIcon
                          sx={{
                            color: 'error',
                            marginRight: '3px',
                            height: '20px',
                          }}
                        />
                        Remove Artwork
                      </Button>
                      <Button
                        style={{ marginTop: '10px', marginRight: '10px' }}
                        size='small'
                        color='info'
                        variant='outlined'
                        onClick={(e) => onApprove(i)}>
                        <HowToRegIcon
                          sx={{
                            color: 'info',
                            marginRight: '3px',
                            height: '20px',
                          }}
                        />
                        Approve Buyer
                      </Button>
                    </>
                  ) : (
                    <></>
                  )}
                  {user &&
                  account &&
                  account !== card.tokenOwner &&
                  card.tokenOwner !== undefined ? (
                      <>
                        <Button
                          style={{ marginTop: '10px' }}
                          size='small'
                          color='success'
                          variant='outlined'
                          onClick={(e) => onBuy(i)}>
                          <ShoppingCartIcon
                            sx={{
                              color: 'success',
                              marginRight: '3px',
                              height: '20px',
                            }}
                          />
                          Buy&nbsp;
                          {/* {user._id !== card.owner ? 'Buy' : 'Set Price'} */}
                          <Icon icon='teenyicons:ethereum-solid' width='11' />
                          {card.price}
                        </Button>
                      </>
                    ) : (
                      <></>
                    )}
                  {user && account && account === card.tokenOwner ? (
                    <>
                      <Button
                        style={{ marginTop: '10px' }}
                        size='small'
                        color='success'
                        variant='outlined'
                        onClick={(e) => onSetPrice(i)}>
                        <LocalOfferIcon
                          sx={{
                            color: 'success',
                            marginRight: '3px',
                            height: '20px',
                          }}
                        />
                        Set Price&nbsp;
                        <Icon icon='teenyicons:ethereum-solid' width='11' />
                        {card.price}
                      </Button>
                    </>
                  ) : (
                    <></>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
          {cards.length > 0 ? (
            <ArtModal
              user={user}
              card={cards[index]}
              handleClose={handleClose}
              open={open}
              account={account}
            />
          ) : (
            <></>
          )}
        </Grid>
      </Container>
    </div>
  )
}

export default Gallery
