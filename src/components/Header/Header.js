import React, { Fragment, useState, useEffect } from 'react'
import Web3 from 'web3'
import { Link, NavLink } from 'react-router-dom'
import ABI from '../../abis/abi'
import { CONTRACT_ADDRESS } from '../../helpers'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import logo from '../../images/zyzygy_eclipse1.png'
import DrawerComponent from './Drawer'
import { useMediaQuery } from 'react-responsive'
import { Button } from '@mui/material'
// import getWeb3 from './getWeb3'
// import detectEthereumProvider from '@metamask/detect-provider'

const Header = ({ user }) => {
  // const [accounts, setAccounts] = useState(undefined)
  // const [web3, setWeb3] = useState(undefined)
  // const [contract, setContract] = useState(undefined)

  // useEffect(() => {
  //   const init = async() => {
  //     const web3 = await getWeb3()

  //     const accounts = await web3.eth.getAccounts()
  //     const networkId = await web3.eth.net.getId()
  //     const deployedNetwork = SimpleStorageContract.networks[networkId]
  //     const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
  //     setWeb3(web3)
  //     setAccounts(accounts)
  //     setContract(contract)
  //   }
  //   init()
  // }, [])

  // const loadWeb3 = () => {
  //   const web3 = new Web3(window.ethereum)
  //   setWeb3(web3)
  // }

  // const loadBlockChain = async () => {
  //   // const web3 = new Web3(Web3.givenProvider || 'http://localhost:8080')
  //   const network = await web3.eth.net.getNetworkType()
  //   console.log(network) // should give you main if you're connected to the main network via metamask...
  //   const accounts = await web3.eth.getAccounts()
  //   setAccount(accounts[0])
  //   console.log(account)
  // }

  const authenticatedOptions = (
    <Fragment>
      <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} to='/submit-art' className='nav-link'>Submit Art</NavLink>
      <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} to='/change-password' className='nav-link'>Change Password</NavLink>
      <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} to='/sign-out' className='nav-link'>Logout</NavLink>
      <Button
        variant='contained'
        type='submit'
        onClick={console.log('clicked')}>
      CONNECT WALLET</Button>
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
      <NavLink style={{ color: 'white', margin: 15, textDecoration: 'none' }} exact to='/faq' className='nav-link'>FAQ</NavLink>
    </Fragment>
  )

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
                {/* {user && (
                  <span className='navbar-text mr-2'>{user.email}</span>
                )} */}
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
