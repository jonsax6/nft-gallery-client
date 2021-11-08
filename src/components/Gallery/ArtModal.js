import React from 'react'
import {
  Modal,
  Fade,
  Box,
  Typography,
  Backdrop,
  AccordionSummary,
  AccordionDetails,
  Accordion
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useMediaQuery } from 'react-responsive'

const desktop = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
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
  const isPhone = useMediaQuery({
    query: '(max-width: 600px)'
  })

  const isTablet = useMediaQuery({
    query: '(max-width: 1000px)'
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
              <Typography style={{ overflow: 'scroll', height: '100px', marginBottom: '10px' }}>
                {card.notes}
              </Typography>
              <Typography variant='h5'>Medium</Typography>
              <Typography style={{ marginBottom: '20px' }}>
                {card.medium}
              </Typography>{' '}
              {/* <Accordion style={{ width: '100%' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'>
                  <Typography>Notes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography gutterBottom paragraph>
                    {card.notes}
                  </Typography>{' '}
                </AccordionDetails>
              </Accordion> */}
              {/* This button will eventually open the metamask browser extension (web3)
            <Button style={{ marginTop: '10px' }} variant='outlined' size='small' color='warning'>
              Inquire
            </Button> */}
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default ArtModal
