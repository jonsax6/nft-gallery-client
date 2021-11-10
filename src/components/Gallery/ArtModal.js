import React, { useEffect, useState } from 'react'
import {
  Modal,
  Fade,
  Box,
  Typography,
  Backdrop
} from '@mui/material'
import { useMediaQuery } from 'react-responsive'
import CloseIcon from '@mui/icons-material/Close'

const desktop = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '800px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1
}

const tablet = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
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

const ArtModal = ({ card, handleClose, open }) => {
  const [hovered, setHovered] = useState(false)
  const isPhone = useMediaQuery({
    query: '(max-width: 600px)'
  })

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  const isTablet = useMediaQuery({
    query: '(max-width: 1200px)'
  })

  let mobileStyle

  if (isPhone) {
    mobileStyle = phone
  } else if (isTablet) {
    mobileStyle = tablet
  } else {
    mobileStyle = desktop
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
          timeout: 500
        }}
        style={{ overflow: 'scroll' }}>
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
                src={card.imageUrl}
                alt={card.artist}
              />
            </div>
            <div style={{ padding: '20px' }}>
              <Typography gutterBottom variant='h4'>
                {card.artist}
              </Typography>
              <Typography gutterBottom variant='h5'>
                Title: {`'${card.title}'`}
              </Typography>
              <Typography
                style={{
                  overflow: 'scroll',
                  height: '75px',
                  marginBottom: '6px'
                }}>
                {card.notes}
              </Typography>
              <Typography style={{ marginBottom: '10px' }}>
                ...scroll for more
              </Typography>
              <Typography variant='h5'>Medium</Typography>
              <Typography>{card.medium}</Typography>{' '}
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default ArtModal
