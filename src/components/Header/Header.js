import React, { Fragment, useState, useEffect } from 'react'
// import Web3 from 'web3'
import { Link, NavLink } from 'react-router-dom'
// import { CONTRACT_ADDRESS } from '../../helpers'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import logo from '../../images/zyzygy_art.png'
import logoSmall from '../../images/zyzygy_compact.png'
import DrawerComponent from './Drawer'
import { useMediaQuery } from 'react-responsive'
import { Button, Typography } from '@mui/material'
import Dropdown from 'muicss/lib/react/dropdown'
import DropdownItem from 'muicss/lib/react/dropdown-item'

const Header = ({ user, active, account, networkId, activate, deactivate, connect, disconnect }) => {
  const isAdmin = user && user.email === 'jonsax@gmail.com'
  const authenticatedOptions = (
    <Fragment>
      <NavLink
        style={{ color: 'white', margin: 15, textDecoration: 'none' }}
        to='/submit-art'
        className='nav-link'>
        Submit Art
      </NavLink>
      <NavLink
        style={{ color: 'white', margin: 15, textDecoration: 'none' }}
        to='/change-password'
        className='nav-link'>
        Change Password
      </NavLink>
      <NavLink
        style={{ color: 'white', margin: 15, textDecoration: 'none' }}
        to='/sign-out'
        className='nav-link'>
        Logout
      </NavLink>
      {active ? (
        <Button variant='contained' type='submit' onClick={disconnect}>
          DISCONNECT
        </Button>
      ) : (
        <Button variant='contained' type='submit' onClick={connect}>
          CONNECT WALLET
        </Button>
      )}
      {isAdmin ? (
        <Dropdown
          sx={{ marginRight: '20px' }}
          variant='default'
          label='Admin'
          color='danger'>
          <DropdownItem link='#/link1'>
            <NavLink
              style={{ color: 'black', textDecoration: 'none' }}
              to='/approve-buyer'
              className='nav-link'>
              Approve Buyer
            </NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink
              style={{ color: 'black', textDecoration: 'none' }}
              to='/approve-artist'
              className='nav-link'>
              Approve Artist
            </NavLink>
          </DropdownItem>
        </Dropdown>
      ) : (
        <></>
      )}
    </Fragment>
  )

  const currentNetwork = (networkId) => {
    if (networkId === 1) {
      return 'main'
    } else if (networkId === 3) {
      return 'Ropsten'
    } else if (networkId === 4) {
      return 'Rinkeby'
    } else if (networkId === 5) {
      return 'Goerli'
    } else if (networkId === 42) {
      return 'Kovan'
    } else if (networkId === 1337) {
      return 'Local'
    } else if (networkId === 5) {
      return 'Goerli'
    } else if (networkId === 56) {
      return 'BSC'
    } else if (networkId === 137) {
      return 'Polygon'
    } else if (networkId === 10) {
      return 'Optimism'
    } else if (networkId === 137) {
      return 'Polygon'
    } else if (networkId === 42161) {
      return 'Arbitrum'
    } else {
      return 'none'
    }
  }

  currentNetwork(networkId)

  // this terniary is needed to prevent an error if substring method (below) tries to
  // work on an undefined account (if not connected to metamask)
  const ethAccount = active ? account : ''

  const accountDisplay = (
    <>
      <Typography
        sx={{
          color: 'white',
          textAlign: 'right',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          marginLeft: '20px',
          marginRight: '20px'
        }}>
        {/* shows email if user is logged in */}
        {user && user.email}
        {/* shows the colon if wallet is connected */}
        {account && ':'}
        &nbsp;{ethAccount}
        {/* &nbsp;{ethAccount.substring(0, 6)}
        {account && '...'}
        {ethAccount.substring(ethAccount.length - 4, ethAccount.length)} */}
      </Typography>
    </>
  )

  const unauthenticatedOptions = (
    <Fragment>
      <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} to='/sign-up' className='nav-link'>Register</NavLink>
      <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} to='/sign-in' className='nav-link'>Login</NavLink>
    </Fragment>
  )

  const alwaysOptions = (
    <Fragment>
      <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} exact to='/' className='nav-link'>Home</NavLink>
      <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} exact to='/about' className='nav-link'>About</NavLink>
      <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} exact to='/gallery' className='nav-link'>View Gallery</NavLink>
      <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} exact to='/faq' className='nav-link'>FAQ</NavLink>
    </Fragment>
  )
  // screens smaller than 1155 isMobile returns true
  const isMobile = useMediaQuery({
    query: '(max-width: 1155px)'
  })

  return (
    <>
      <Box sx={{ flexGrow: 1, fontWeight: '100' }}>
        <AppBar style={{ backgroundColor: '#424242' }} position='fixed'>
          <Toolbar>
            {isMobile ? (
              <>
                <DrawerComponent user={user} />
                <Link
                  to='/'
                  style={{
                    color: '#000',
                    textDecoration: 'none',
                    fontWeight: '100',
                    flexGrow: 1,
                  }}>
                  <img
                    src={logoSmall}
                    style={{
                      width: '100px',
                      marginTop: 10,
                    }}
                  />
                </Link>
                {active ? (
                  <Button
                    variant='contained'
                    type='submit'
                    onClick={disconnect}>
                    DISCONNECT
                  </Button>
                ) : (
                  <Button variant='contained' type='submit' onClick={connect}>
                    CONNECT
                  </Button>
                )}
                {isAdmin ? (
                  <Dropdown
                    sx={{ marginRight: '20px' }}
                    variant='default'
                    label='Admin'
                    color='danger'>
                    <DropdownItem link='#/link1'>
                      <NavLink
                        style={{ color: 'black', textDecoration: 'none' }}
                        to='/sign-out'
                        className='nav-link'>
                        Authorize Buyer
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>Approve Artist</DropdownItem>
                    <DropdownItem>Option 3</DropdownItem>
                    <DropdownItem>Option 4</DropdownItem>
                  </Dropdown>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <>
                <Link
                  to='/'
                  style={{
                    color: '#000',
                    textDecoration: 'none',
                    fontWeight: '100',
                    flexGrow: 1,
                  }}>
                  <img
                    src={logo}
                    style={{
                      width: '200px',
                      marginTop: 10,
                    }}
                  />
                </Link>
                <div sx={{ marginLeft: '10px', display: 'flex' }}>
                  {alwaysOptions}
                  {user ? authenticatedOptions : unauthenticatedOptions}
                  {/* {user && (
                  <span className='navbar-text mr-2'>{user.email}</span>
                )} */}
                </div>
              </>
            )}
          </Toolbar>
          <div style={{ backgroundColor: '#323232' }}>
            {user ? accountDisplay : <></>}
          </div>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
