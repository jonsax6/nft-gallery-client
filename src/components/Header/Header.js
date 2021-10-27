import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
// import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
// import ColorLensIcon from '@mui/icons-material/ColorLens'
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
// import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import logo from '../../images/zyzygy_eclipse.png'

const authenticatedOptions = (
  <Fragment>
    <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} to='/submit-art' className='nav-link'>Submit Art</NavLink>
    <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} to='/sign-out' className='nav-link'>Sign Out</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} exact to='/' className='nav-link'>Home</NavLink>
    <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} exact to='/gallery' className='nav-link'>Gallery</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <>
    <Box sx={{ flexGrow: 1, fontWeight: '100' }}>
      <AppBar style={{ backgroundColor: '#424242' }} position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Link
            to='/'
            style={{
              paddingLeft: '20px',
              color: '#FFF',
              textDecoration: 'none',
              fontWeight: '100',
              flexGrow: 1
            }}>
            <img
              src={logo}
              style={{
                width: '300px',
                marginTop: 10
              }}
            />
            {/* <ChevronLeftIcon />
            <ColorLensIcon />
            <ChevronRightIcon style={{ marginRight: '10px' }} /> */}
          </Link>
          {user && (
            <span className='navbar-text mr-2'>Welcome, {user.email}</span>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Toolbar>
      </AppBar>
    </Box>
  </>
)

export default Header
