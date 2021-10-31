/* eslint-disable no-tabs */
import React, { Component, useState } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
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
import SubmitArt from './components/Gallery/submitArt'
import { CssBaseline, Container } from '@mui/material'
import './App.css'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMessageAlerts] = useState([])
  const [openDrawer, setOpenDrawer] = useState(false)

  const setUserAccount = (user) => setUser(user)

  const clearUser = () => setUser(null)

  const deleteAlert = (id) => {
    setMessageAlerts(() => {
      return { msgAlerts: msgAlerts.filter((msg) => msg.id !== id) }
    })
  }

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMessageAlerts((msgAlerts) => {
      return {
        msgAlerts: [...msgAlerts, { heading, message, variant, id }]
      }
    })
  }

  return (
    <div style={{ backgroundColor: '#202020', height: '100vh' }}>
      <CssBaseline />
      <Header user={user} />
      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
          deleteAlert={deleteAlert}
        />
      ))}
      <Container style={{ width: '100vw', padding: '0', maxWidth: '100%' }}>
        <Route
          exact
          path='/'
          render={() => <Home style={{ backgroundColor: '#202020' }} />}
        />
        <Route
          path='/sign-up'
          render={() => (
            <SignUp
              style={{ backgroundColor: 'black' }}
              msgAlert={msgAlert}
              setUserAccount={setUserAccount}
            />
          )}
        />
        <Route
          path='/sign-in'
          render={() => (
            <SignIn
              msgAlert={msgAlert}
              setUserAccount={setUserAccount}
            />
          )}
        />
        <Route
          path='/gallery'
          render={() => <Gallery style={{ backgroundColor: '#202020' }} />}
        />
        <AuthenticatedRoute
          user={user}
          path='/sign-out'
          render={() => (
            <SignOut
              style={{ backgroundColor: 'black' }}
              msgAlert={msgAlert}
              clearUser={clearUser}
              user={user}
            />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path='/change-password'
          render={() => (
            <ChangePassword msgAlert={msgAlert} user={user} />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path='/submit-art'
          render={() => (
            <SubmitArt
              style={{ backgroundColor: 'black' }}
              msgAlert={msgAlert}
              user={user}
            />
          )}
        />
      </Container>
    </div>
  )
}

export default App
