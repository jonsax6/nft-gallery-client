import React from 'react'
import {
  Modal,
  Fade,
  Box,
  Typography,
  Backdrop,
  Button
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
            <Typography gutterBottom paragraph>{card.notes}</Typography>{' '}
            <Typography variant="h5">Medium</Typography>
            <Typography>{card.medium}</Typography>{' '}
            <Button style={{ marginTop: '10px' }} variant='outlined' size='small' color='warning'>
              Inquire
            </Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}

export default ArtModal
