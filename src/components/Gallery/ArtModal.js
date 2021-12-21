import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Modal,
  Fade,
  Box,
  Typography,
  Backdrop,
  Button
} from '@mui/material'
import { useMediaQuery } from 'react-responsive'
import CloseIcon from '@mui/icons-material/Close'
import { Icon } from '@iconify/react'

const desktop = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '550px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1
}

const tablet = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '45%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1
}

const phone = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1
}

const ArtModal = ({ card, handleClose, open, account, user }) => {
  const [hovered, setHovered] = useState(false)
  const history = useHistory()
  const isPhone = useMediaQuery({
    query: '(max-width: 600px)'
  })

  const isTablet = useMediaQuery({
    query: '(max-width: 1200px)'
  })

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  let mobileStyle

  if (isPhone) {
    mobileStyle = phone
  } else if (isTablet) {
    mobileStyle = tablet
  } else {
    mobileStyle = desktop
  }

  const onBuy = (i) => {
    history.push(`/buy/${card.contractAddress}/${card.lastMinted}/${card._id}/${card.price}`)
  }

  const onSetPrice = (i) => {
    history.push(`/set-price/${card._id}`)
  }

  return (
    <>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: 'auto' }}>
        <Fade in={open}>
          <Box sx={mobileStyle}>
            <div>
              <CloseIcon
                onClick={handleClose}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
              />
            </div>
            <div style={{ padding: '0px' }}>
              <img
                style={{ maxWidth: '100%' }}
                src={card.displayImageUrl}
                alt={card.title}
              />
            </div>
            <div
              style={{
                padding: '20px',
                overflow: 'auto',
                height: '200px',
              }}>
              <Typography gutterBottom variant='h4'>
                {card.artist}
              </Typography>
              <Typography gutterBottom variant='h5'>
                Title: {`'${card.title}'`}
              </Typography>
              <Typography
                style={{
                  marginBottom: '6px',
                }}>
                {card.notes}
              </Typography>
              <Typography variant='h6'>Medium</Typography>
              <Typography
                style={{
                  marginBottom: '6px',
                }}>
                {card.medium}
              </Typography>{' '}
              <Typography variant='h6'>Release Date</Typography>
              <Typography
                style={{
                  marginBottom: '6px',
                }}>
                {card.releaseDate}
              </Typography>{' '}
              {user && account && (account !== card.tokenOwner) && card.tokenOwner !== undefined ? (
                <>
                  <Button
                    style={{ marginTop: '10px' }}
                    size='small'
                    color='success'
                    variant='outlined'
                    onClick={(e) => onBuy()}>
                    Buy&nbsp;
                    {/* {user._id !== card.owner ? 'Buy' : 'Set Price'} */}
                    <Icon icon='teenyicons:ethereum-solid' width='11' />
                    {card.price}
                  </Button>
                </>
              ) : (
                <></>
              )}
              {user && account && (account === card.tokenOwner) ? (
                <>
                  <Button
                    style={{ marginTop: '10px' }}
                    size='small'
                    color='success'
                    variant='outlined'
                    onClick={(e) => onSetPrice()}>
                    Set Price&nbsp;
                    <Icon icon='teenyicons:ethereum-solid' width='11' />
                    {card.price}
                  </Button>
                </>
              ) : (
                <></>
              )}
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default ArtModal
