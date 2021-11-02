/* eslint-disable no-tabs */
import React, { useState } from 'react'
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
import SubmitArt from './components/Gallery/submitArt'
import UpdateArt from './components/Gallery/UpdateArt'
import RemoveArt from './components/Gallery/RemoveArt'
import About from './components/About/About'
import { CssBaseline, Container } from '@mui/material'
import './App.css'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  const clearUser = () => setUser(null)
  const deleteAlert = (id) => {
    setMsgAlerts(msgAlerts.filter((msg) => msg.id !== id))
  }
  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts([...msgAlerts, { heading, message, variant, id }])
  }

  return (
    <>
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
            path="/"
            render={() => <Home style={{ backgroundColor: '#202020' }} />}
          />
          <Route
            path="/sign-up"
            render={() => (
              <SignUp
                style={{ backgroundColor: 'black' }}
                msgAlert={msgAlert}
                setUser={setUser}
              />
            )}
          />
          <Route
            path="/sign-in"
            render={() => (
              <SignIn msgAlert={msgAlert} setUser={setUser} />
            )}
          />
          <Route
            path="/about"
            render={() => (
              <About
                style={{ backgroundColor: 'black' }}
              />
            )}
          />
          <Route
            path="/gallery"
            render={() => <Gallery user={user} style={{ backgroundColor: '#202020' }} />}
          />
          <AuthenticatedRoute
            user={user}
            path="/sign-out"
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
            path="/change-password"
            render={() => (
              <ChangePassword msgAlert={msgAlert} user={user} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path="/submit-art"
            render={() => (
              <SubmitArt
                style={{ backgroundColor: 'black' }}
                msgAlert={msgAlert}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path="/update/:id"
            render={() => (
              <UpdateArt
                style={{ backgroundColor: 'black' }}
                msgAlert={msgAlert}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path="/remove/:id"
            render={() => (
              <RemoveArt
                style={{ backgroundColor: 'black' }}
                msgAlert={msgAlert}
                user={user}
              />
            )}
          />
        </Container>
      </div>
    </>
  )
}

export default App
