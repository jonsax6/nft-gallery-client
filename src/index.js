import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Web3ReactProvider } from '@web3-react/core'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Web3 from 'web3'

const getLibrary = (provider) => {
  return new Web3(provider)
}

const appJsx = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </BrowserRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
