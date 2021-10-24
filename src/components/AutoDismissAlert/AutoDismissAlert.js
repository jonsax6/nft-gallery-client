import React from 'react'
// import Alert from 'react-bootstrap/Alert'
// import Alert from '@mui/material/Alert'
// import Snackbar from '@mui/material/Snackbar'
import { Alert, Snackbar, Typography } from '@mui/material'

import './AutoDismissAlert.scss'

class AutoDismissAlert extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
    this.timeoutId = null
  }

  componentDidMount () {
    this.timeoutId = setTimeout(this.handleClose, 5000)
  }

  componentWillUnmount () {
    clearTimeout(this.timeoutId)
  }

handleClose = () => this.setState({ show: false })

render () {
  const { variant, heading, message, deleteAlert, id } = this.props

  // Delete this alert after the fade animation time (300 ms by default)
  if (!this.state.show) {
    setTimeout(() => {
      deleteAlert(id)
    }, 300)
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={this.handleClose}>
      <Alert variant='filled' severity={variant} onClose={this.handleClose}>
        <div className='container'>
          <Typography variant='h6'>{heading}</Typography>
          <p className='alert-body'>{message}</p>
        </div>
      </Alert>
    </Snackbar>
  )
}
}

export default AutoDismissAlert
