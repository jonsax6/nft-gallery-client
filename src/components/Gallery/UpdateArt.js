import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router'
import Web3 from 'web3'
import { updateArtwork, showArtwork } from '../../api/artwork'
import {
  updateArtworkSuccess,
  mintArtworkSuccess,
  mintArtworkFailure
} from '../AutoDismissAlert/messages'
import {
  Typography,
  Grid,
  Button,
  Card,
  CardContent
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import HttpIcon from '@mui/icons-material/Http'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import PaletteIcon from '@mui/icons-material/Palette'
import EventIcon from '@mui/icons-material/Event'
import HistoryIcon from '@mui/icons-material/History'
import PublishIcon from '@mui/icons-material/Publish'
import NoteIcon from '@mui/icons-material/Note'
import GavelIcon from '@mui/icons-material/Gavel'
import FilterIcon from '@mui/icons-material/Filter'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import TextFieldComponent from '../TextField/TextFieldComponent'
import { upload } from './Upload'
import { Icon } from '@iconify/react'
import Zyzygy from '../../abis/Zyzygy.json'
import { UpdateTwoTone } from '@mui/icons-material'

const UpdateArt = ({ msgAlert, user, account }) => {
  const { id } = useParams()
  const [card, setCard] = useState(null)
  // const [web3, setWeb3] = useState(null)
  const [artist, setArtist] = useState(card ? card.artist : '')
  const [price, setPrice] = useState(card ? card.price : '')
  const [title, setTitle] = useState(card ? card.title : '')
  const [image, setImage] = useState(card ? card.image : '')
  const [displayImageUrl, setDisplayImageUrl] = useState(card ? card.displayImageUrl : '')
  const [releaseDate, setReleaseDate] = useState(card ? card.releaseDate : '')
  const [medium, setMedium] = useState(card ? card.medium : '')
  const [artistRoyalty, setArtistRoyalty] = useState(card ? card.artistRoyalty : '')
  const [curatorRoyalty, setCuratorRoyalty] = useState(card ? card.curatorRoyalty : '')
  const [provenance, setProvenance] = useState(card ? card.provenance : '')
  const [exhibitionHistory, setExhibitionHistory] = useState(card ? card.exhibitionHistory : '')
  const [publishingHistory, setPublishingHistory] = useState(card ? card.publishingHistory : '')
  const [notes, setNotes] = useState(card ? card.notes : '')
  const [contractAddress, setContractAddress] = useState(card ? card.contractAddress : '')
  const [tokenId, setTokenId] = useState(card ? card.tokenId : '')
  const [lastMinted, setLastMinted] = useState(card ? card.lastMinted : null)
  const [isMinted, setIsMinted] = useState(card ? card.isMinted : false)
  const history = useHistory()

  const art = {
    artist: artist,
    title: title,
    price: price,
    image: image,
    displayImageUrl: displayImageUrl,
    medium: medium,
    artistRoyalty: artistRoyalty,
    curatorRoyalty: curatorRoyalty,
    provenance: provenance,
    exhibitionHistory: exhibitionHistory,
    publishingHistory: publishingHistory,
    releaseDate: releaseDate,
    notes: notes,
    contractAddress: contractAddress,
    tokenId: tokenId,
    lastMinted: lastMinted,
    isMinted: isMinted
  }

  const web3 = new Web3(Web3.givenProvider)
  const ZyzygyContract = Zyzygy.abi
  const Instance = new web3.eth.Contract(ZyzygyContract, contractAddress)

  const handleChangeArtist = (event) =>
    setArtist(event.target.value)

  const handleChangeTitle = (event) =>
    setTitle(event.target.value)

  const handleChangeImage = (event) =>
    setImage(event.target.value)

  const handleChangeDisplayImageUrl = (event) =>
    setDisplayImageUrl(event.target.value)

  const handleChangeMedium = (event) =>
    setMedium(event.target.value)

  const handleChangeArtistRoyalty = (event) =>
    setArtistRoyalty(event.target.value)

  const handleChangeCuratorRoyalty = (event) =>
    setCuratorRoyalty(event.target.value)

  const handleChangeProvenance = (event) =>
    setProvenance(event.target.value)

  const handleChangeExhibitionHistory = (event) =>
    setExhibitionHistory(event.target.value)

  const handleChangeReleaseDate = (event) =>
    setReleaseDate(event.target.value)

  const handleChangeNotes = (event) =>
    setNotes(event.target.value)

  const handleChangeContractAddress = (event) =>
    setContractAddress(event.target.value)

  useEffect(() => {
    showArtwork(id)
      .then((res) => {
        const art = res.data.artwork
        setCard(art)
        setArtist(art.artist)
        setTitle(art.title)
        setPrice(art.price)
        setImage(art.image)
        setDisplayImageUrl(art.displayImageUrl)
        setMedium(art.medium)
        setArtistRoyalty(art.artistRoyalty)
        setCuratorRoyalty(art.curatorRoyalty)
        setProvenance(art.provenance)
        setExhibitionHistory(art.exhibitionHistory)
        setReleaseDate(art.releaseDate)
        setNotes(art.notes)
        setContractAddress(art.contractAddress)
        setTokenId(art.tokenId)
        setLastMinted(art.lastMinted)
        setIsMinted(art.isMinted)
      })
  }, [id])

  // let mintVal = await _contract.methods
  //   .mint(
  //     tokenId,
  //     web3.utils.toWei(TokenPrice.toString(), 'ether'),
  //     'hbvjhbghbhbasdasdasdadaad'
  //   )
  // .send({
  //   from: accounts[0],
  //   value: web3.utils.toWei(TokenPrice.toString(), 'ether'),
  // })

  const mintArtwork = async (data) => {
    try {
      const hashUrl = await upload(data)
      const price = data.price
      console.log(hashUrl)
      Instance.methods
        .safeMint(
          account,
          hashUrl,
          web3.utils.toWei(price.toString(), 'ether')
        )
        .send({ from: account })
        .then((res) => console.log(res))
        .then(() => {
          setIsMinted(true)
          setLastMinted(tokenId)
        })
        .then(() => {
          msgAlert({
            heading: 'Mint Artwork Success',
            message: mintArtworkSuccess,
            variant: 'success',
          })
        })
        .finally(() => {
          onFetchId()
        })
      const updateMinted = {
        lastMinted: tokenId,
        isMinted: true,
      }

      const setArtist = await Instance.methods
        .setArtist(data.tokenId, account)
        .send({ from: account })
      console.log(setArtist)

      updateArtwork(id, updateMinted, user)
        .then(() =>
          msgAlert({
            heading: 'Update Artwork Success',
            message: updateArtworkSuccess,
            variant: 'success',
          })
        )
        .catch((error) => {
          msgAlert({
            heading: 'Update Art Failed',
            message: error.message,
            variant: 'error',
          })
        })
    } catch (err) {
      console.log(err)
    }
  }

  const onFetchId = async () => {
    console.log(isMinted)
    const nextId = await Instance.methods.getNextTokenId().call()
    setTokenId(nextId)
    const newToken = {
      tokenId: nextId
    }
    console.log(newToken)

    updateArtwork(id, newToken, user)
      .then(() =>
        msgAlert({
          heading: 'Update Artwork Success',
          message: updateArtworkSuccess,
          variant: 'success',
        })
      )
      .catch((error) => {
        msgAlert({
          heading: 'Update Art Failed',
          message: error.message,
          variant: 'error',
        })
      })
  }

  const onUpdateArtwork = (event) => {
    if (event) {
      event.preventDefault()
    }

    updateArtwork(id, art, user)
      .then((res) => {
        console.log(res)
      })
      .then(() =>
        msgAlert({
          heading: 'Update Artwork Success',
          message: updateArtworkSuccess,
          variant: 'success'
        })
      )
      .then(() => history.push('/gallery'))
      .catch((error) => {
        msgAlert({
          heading: 'Update Art Failed',
          message: error.message,
          variant: 'error'
        })
      })
      .finally(() => {
        setArtist('')
        setTitle('')
        setPrice('')
        setImage('')
        setDisplayImageUrl('')
        setReleaseDate('')
        setMedium('')
        setArtistRoyalty('')
        setCuratorRoyalty('')
        setExhibitionHistory('')
        setPublishingHistory('')
        setProvenance('')
        setNotes('')
        setTokenId('')
        setLastMinted('')
        setIsMinted(false)
      })
  }

  const handleKeypress = (event) => {
    // it triggers by pressing the enter key
    if (event.keyCode === 13 || event.which === 13) {
      onUpdateArtwork()
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
                  <PublishIcon
                    sx={{ color: 'white', marginRight: '10px', height: '30px' }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant='h5'>Update Your Artwork</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'artist'}
                      label={'Artist'}
                      icon={<AccountCircle sx={{ color: 'white' }} />}
                      variant={'outlined'}
                      value={artist}
                      onChange={handleChangeArtist}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'title'}
                      label={'Title'}
                      icon={<ArtTrackIcon sx={{ color: 'white' }} />}
                      variant={'outlined'}
                      value={title}
                      onChange={handleChangeTitle}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'image'}
                      label={'Image'}
                      icon={<HttpIcon sx={{ color: 'white' }} />}
                      variant={'outlined'}
                      value={image}
                      onChange={handleChangeImage}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'displayImgUrl'}
                      label={'Display Image Url'}
                      icon={<HttpIcon sx={{ color: 'white' }} />}
                      variant={'outlined'}
                      value={displayImageUrl}
                      onChange={handleChangeDisplayImageUrl}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'medium'}
                      label={'Medium'}
                      icon={<PaletteIcon sx={{ color: 'white' }} />}
                      variant={'outlined'}
                      value={medium}
                      onChange={handleChangeMedium}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'artistRoyalty'}
                      label={'Artist Royalty'}
                      icon={<MonetizationOnIcon sx={{ color: 'white' }} />}
                      variant={'outlined'}
                      value={artistRoyalty}
                      onChange={handleChangeArtistRoyalty}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'curatorRoyalty'}
                      label={'Curator Royalty'}
                      icon={<MonetizationOnIcon sx={{ color: 'white' }} />}
                      variant={'outlined'}
                      value={curatorRoyalty}
                      onChange={handleChangeCuratorRoyalty}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'provenance'}
                      label={'Provenance'}
                      icon={<HttpIcon sx={{ color: 'white' }} />}
                      variant={'outlined'}
                      value={provenance}
                      onChange={handleChangeProvenance}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      id={'exhibitionHistory'}
                      label={'Exhibition History'}
                      icon={<HistoryIcon sx={{ color: 'white' }} />}
                      variant={'outlined'}
                      value={exhibitionHistory}
                      onChange={handleChangeExhibitionHistory}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      required={true}
                      id={'releaseDate'}
                      label={'Release Date'}
                      icon={<EventIcon sx={{ color: 'white' }} />}
                      variant={'outlined'}
                      value={releaseDate}
                      onChange={handleChangeReleaseDate}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextFieldComponent
                      id={'notes'}
                      label={'Notes'}
                      icon={<NoteIcon sx={{ color: 'white' }} />}
                      variant={'outlined'}
                      value={notes}
                      onChange={handleChangeNotes}
                      keyPress={handleKeypress}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ marginBottom: '15px' }}>
                  <Grid item xs={12}>
                    <TextFieldComponent
                      id={'contractAddress'}
                      label={'Contract Address'}
                      icon={<GavelIcon sx={{ color: 'white' }} />}
                      variant={'outlined'}
                      value={contractAddress}
                      onChange={handleChangeContractAddress}
                      keyPress={handleKeypress}
                    />
                  </Grid>
                </Grid>
                {/* <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextFieldComponent
                      disabled={true}
                      id={'tokenId'}
                      label={'Token ID'}
                      icon={<FilterIcon sx={{ color: 'white' }} />}
                      variant={'outlined'}
                      value={tokenId}
                    />
                  </Grid>
                </Grid> */}
                {isMinted ? (
                  <Grid container>
                    <Grid item>
                      <FilterIcon
                        sx={{
                          color: 'white',
                          marginRight: '10px',
                          height: '30px',
                        }}
                      />
                    </Grid>
                    <Grid item sx={{ marginTop: '3px' }}>
                      <Typography variant='p'>
                        Minted ID: {art.lastMinted}
                      </Typography>
                    </Grid>
                  </Grid>
                ) : (
                  <></>
                )}
                <Grid container style={{ marginTop: '0px' }}>
                  <Grid item>
                    <AddPhotoAlternateIcon
                      sx={{
                        color: 'white',
                        marginRight: '10px',
                        height: '30px',
                      }}
                    />
                  </Grid>
                  <Grid item sx={{ marginTop: '3px' }}>
                    <Typography variant='p'>
                      Next available token ID to mint: {art.tokenId}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container style={{ marginTop: '0px' }}>
                  <Grid item sx={{ marginTop: '3px' }}>
                    <Icon
                      icon='teenyicons:ethereum-solid'
                      width='22'
                      style={{ marginRight: '10px' }}
                    />
                  </Grid>
                  <Grid item sx={{ marginTop: '3px' }}>
                    <Typography variant='p'>
                      Current Price:{' '}
                      <Icon icon='teenyicons:ethereum-solid' width='11' />
                      {price}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={10} md={6} style={{ marginTop: '20px' }}>
                    <Button
                      variant='contained'
                      type='submit'
                      onClick={onFetchId}>
                      Fetch ID
                    </Button>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={10} md={6} style={{ marginTop: '20px' }}>
                    <Button
                      variant='contained'
                      type='submit'
                      onClick={onUpdateArtwork}>
                      Update Artwork
                    </Button>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={10} md={6} style={{ marginTop: '20px' }}>
                    <Button
                      variant='contained'
                      type='submit'
                      onClick={() => mintArtwork(art)}>
                      Mint NFT {art.tokenId ? art.tokenId : ''}
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

export default UpdateArt