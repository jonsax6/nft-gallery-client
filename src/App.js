/* eslint-disable no-tabs */
import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import { indexArtwork } from './api/artwork'
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
import ApproveBuyer from './components/Header/ApproveBuyer'
import ApproveArtist from './components/Header/ApproveArtist'
import About from './components/About/About'
import FAQ from './components/FAQ/FAQ'
import { CssBaseline, Container } from '@mui/material'
import './App.css'
import { useWeb3React } from '@web3-react/core'
import { injected } from './components/Wallet/Connectors'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [zyzygyContract, setZyzygyContract] = useState('')
  const { active, account, library, networkId, connector, activate, deactivate } =
    useWeb3React()

  const connect = async () => {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  const disconnect = async () => {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  const clearUser = () => setUser(null)
  const deleteAlert = (id) => {
    setMsgAlerts(msgAlerts.filter((msg) => msg.id !== id))
  }
  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts([...msgAlerts, { heading, message, variant, id }])
  }

  const setContract = () => {
    indexArtwork()
      .then((res) => {
        setZyzygyContract(res.data.artwork[0].contractAddress)
      })
  }

  return (
    <>
      <div style={{ backgroundColor: 'white', height: '100vh' }}>
        <CssBaseline />
        <Header
          user={user}
          active={active}
          account={account}
          networkId={networkId}
          connect={connect}
          disconnect={disconnect}
        />
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
            render={() => (
              <Home style={{ backgroundColor: '#202020' }} account={account} />
            )}
          />
          <Route
            path='/sign-up'
            render={() => (
              <SignUp
                style={{ backgroundColor: 'black' }}
                msgAlert={msgAlert}
                setUser={setUser}
              />
            )}
          />
          <Route
            path='/sign-in'
            render={() => <SignIn msgAlert={msgAlert} setUser={setUser} />}
          />
          <Route
            path='/about'
            render={() => <About style={{ backgroundColor: 'white' }} />}
          />
          <Route
            path='/gallery'
            render={() => (
              <Gallery
                user={user}
                account={account}
                style={{ backgroundColor: '#202020' }}
              />
            )}
          />
          <Route
            path='/faq'
            render={() => (
              <FAQ user={user} style={{ backgroundColor: '#202020' }} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/sign-out'
            render={() => (
              <SignOut
                style={{ backgroundColor: 'black' }}
                msgAlert={msgAlert}
                clearUser={clearUser}
                disconnect={disconnect}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/change-password'
            render={() => <ChangePassword msgAlert={msgAlert} user={user} />}
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
          <AuthenticatedRoute
            user={user}
            path='/update/:id'
            render={() => (
              <UpdateArt
                style={{ backgroundColor: 'black' }}
                msgAlert={msgAlert}
                user={user}
                account={account}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/remove/:id'
            render={() => (
              <RemoveArt
                style={{ backgroundColor: 'black' }}
                msgAlert={msgAlert}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/approve-buyer'
            render={() => (
              <ApproveBuyer
                style={{ backgroundColor: 'black' }}
                msgAlert={msgAlert}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/approve-artist'
            render={() => (
              <ApproveArtist
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
