import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme, useMediaQuery } from '@mui/material'
import logo from '../../images/zyzygy_eclipse1.png'
import About from '../About/About'
import { ClassNames } from '@emotion/react'
import DrawerComponent from './Drawer'
// import DrawerComponent from './Drawer'

const authenticatedOptions = (
  <Fragment>
    <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} to='/submit-art' className='nav-link'>Submit Art</NavLink>
    <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} to='/sign-out' className='nav-link'>Logout</NavLink>
  </Fragment>
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
  </Fragment>
)

const Header = ({ user }) => {
  const isMobile = false
  return (
    <>
      <Box sx={{ flexGrow: 1, fontWeight: '100' }}>
        <AppBar style={{ backgroundColor: '#424242' }} position='fixed'>
          <Toolbar>
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
                  width: '200px',
                  marginTop: 10
                }}
              />
            </Link>
            {isMobile ? (
              <DrawerComponent />
            ) : (
              <div sx={{ marginLeft: '10px', display: 'flex' }}>
                {user && <span className='navbar-text mr-2'>{user.email}</span>}
                {alwaysOptions}
                {user ? authenticatedOptions : unauthenticatedOptions}
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
