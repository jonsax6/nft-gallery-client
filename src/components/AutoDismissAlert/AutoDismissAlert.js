import React, { useState, useEffect } from 'react'
import { Alert, Snackbar, Typography } from '@mui/material'
import './AutoDismissAlert.scss'

const AutoDismissAlert = ({ heading, variant, message, id, deleteAlert }) => {
  const [show, setShow] = useState(true)
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        deleteAlert(id)
      }, 300)
    }
    setTimeout(handleClose, 5000)
    // Specify how to clean up after this effect: componentWillUnmount
    return function cleanup () {
      clearTimeout(timeoutId)
    }
  })

  const handleClose = () => setShow(false)

  return (
    <>
      <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
        <Alert variant="filled" severity={variant} onClose={handleClose}>
          <div className="container">
            <Typography variant="h6">{heading}</Typography>
            <p className="alert-body">{message}</p>
          </div>
        </Alert>
      </Snackbar>
    </>
  )
}

export default AutoDismissAlert
