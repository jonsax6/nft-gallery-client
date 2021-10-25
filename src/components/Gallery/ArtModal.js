import React from 'react'
import {
  Modal,
  Fade,
  Box,
  Typography,
  Backdrop
} from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1
}

const ArtModal = ({ card, handleClose, open }) => {
  console.log(card.artist)
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <div style={{ padding: '0px' }}>
            <img style={{ maxWidth: '100%' }} src={card.imageUrl} alt={card.artist}/>
          </div>
          <Typography gutterBottom variant='h5'>
            {card.artist}
          </Typography>
          <Typography gutterBottom paragraph>{card.notes}</Typography>{' '}
          <Typography variant="h6">Medium</Typography>
          <Typography>{card.medium}</Typography>{' '}
        </Box>
      </Fade>
    </Modal>
  )
}

export default ArtModal
