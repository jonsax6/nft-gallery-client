/* eslint-disable no-tabs */
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import Home from './components/Home/Home'
import ChangePassword from './components/auth/ChangePassword'
import Gallery from './components/Gallery/Gallery'
import { CssBaseline } from '@mui/material'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = (user) => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return {
        msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
      }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <div style={{ backgroundColor: '#424242' }}>
        <CssBaseline />
        <Header user={user} />
        {msgAlerts.map((msgAlert) => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className='container'>
          <Route
            exact path='/'
            render={() => (
              <Home
                style={{ backgroundColor: '#424242' }}
              />
            )}
          />
          <Route
            path='/sign-up'
            render={() => (
              <SignUp
                style={{ backgroundColor: 'black' }}
                msgAlert={this.msgAlert}
                setUser={this.setUser}
              />
            )}
          />
          <Route
            path='/sign-in'
            render={() => (
              <SignIn
                style={{ backgroundColor: 'black' }}
                msgAlert={this.msgAlert}
                setUser={this.setUser}
              />
            )}
          />
          <Route
            path='/gallery'
            render={() => <Gallery style={{ backgroundColor: 'black' }} />}
          />
          <AuthenticatedRoute
            user={user}
            path='/sign-out'
            render={() => (
              <SignOut
                style={{ backgroundColor: 'black' }}
                msgAlert={this.msgAlert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/change-password'
            render={() => (
              <ChangePassword msgAlert={this.msgAlert} user={user} />
            )}
          />
        </main>
      </div>
    )
  }
}

export default App
