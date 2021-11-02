import React, { useState, Fragment } from 'react'
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
// import makeStyles from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink } from 'react-router-dom'

// const useStyles = makeStyles(() => ({
//   link: {
//     TextDecoration: 'none',
//     color: 'blue',
//     fontSize: '20px'
//   },
//   icon: {
//     color: 'white'
//   }
// }))

const DrawerComponent = ({ user }) => {
  const authenticatedOptions = (
    <Fragment>
      <ListItem onClick={() => setOpenDrawer(false)}>
        <ListItemText>
          <NavLink
            style={{ color: 'white', margin: 15, textDecoration: 'none' }}
            to='/submit-art'
            className='nav-link'>
            Submit Art
          </NavLink>
        </ListItemText>
      </ListItem>
      <ListItem onClick={() => setOpenDrawer(false)}>
        <ListItemText>
          <NavLink
            style={{ color: 'white', margin: 15, textDecoration: 'none' }}
            to='/change-password'
            className='nav-link'>
            Change Password
          </NavLink>
        </ListItemText>
      </ListItem>
      <ListItem onClick={() => setOpenDrawer(false)}>
        <ListItemText>
          <NavLink
            style={{ color: 'white', margin: 15, textDecoration: 'none' }}
            to='/sign-out'
            className='nav-link'>
            Logout
          </NavLink>
        </ListItemText>
      </ListItem>
    </Fragment>
  )

  const unauthenticatedOptions = (
    <Fragment>
      <ListItem onClick={() => setOpenDrawer(false)}>
        <ListItemText>
          <NavLink
            style={{ color: 'white', margin: 15, textDecoration: 'none' }}
            to='/sign-up'
            className='nav-link'>
            Register
          </NavLink>
        </ListItemText>
      </ListItem>
      <ListItem onClick={() => setOpenDrawer(false)}>
        <ListItemText>
          <NavLink
            style={{ color: 'white', margin: 15, textDecoration: 'none' }}
            to='/sign-in'
            className='nav-link'>
            Login
          </NavLink>
        </ListItemText>
      </ListItem>
    </Fragment>
  )

  const alwaysOptions = (
    <Fragment>
      <ListItem onClick={() => setOpenDrawer(false)}>
        <ListItemText>
          <NavLink
            style={{ color: 'white', margin: 15, textDecoration: 'none' }}
            exact
            to='/'
            className='nav-link'>
            Home
          </NavLink>
        </ListItemText>
      </ListItem>
      <ListItem onClick={() => setOpenDrawer(false)}>
        <ListItemText>
          <NavLink
            style={{ color: 'white', margin: 15, textDecoration: 'none' }}
            exact
            to='/gallery'
            className='nav-link'>
            View Gallery
          </NavLink>
        </ListItemText>
      </ListItem>
    </Fragment>
  )

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {user && <span className='navbar-text mr-2'>{user.email}</span>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerComponent