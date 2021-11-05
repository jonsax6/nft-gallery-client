import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import logo from '../../images/zyzygy_eclipse1.png'
import DrawerComponent from './Drawer'
import { useMediaQuery } from 'react-responsive'

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
  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  return (
    <>
      <Box sx={{ flexGrow: 1, fontWeight: '100' }}>
        <AppBar style={{ backgroundColor: '#424242' }} position='fixed'>
          <Toolbar>
            {isMobile ? <>
              <DrawerComponent user={user} />
              <Link
                to='/'
                style={{
                  paddingLeft: '20px',
                  color: '#000',
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
            </> : <>
              <Link
                to='/'
                style={{
                  paddingLeft: '20px',
                  color: '#000',
                  textDecoration: 'none',
                  fontWeight: '100',
                  flexGrow: 1
                }}
              >
                <img
                  src={logo}
                  style={{
                    width: '200px',
                    marginTop: 10
                  }}
                />
              </Link>
              <div sx={{ marginLeft: '10px', display: 'flex' }}>
                {alwaysOptions}
                {user ? authenticatedOptions : unauthenticatedOptions}
                {user && (
                  <span className='navbar-text mr-2'>{user.email}</span>
                )}
              </div>
            </>
            }
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
