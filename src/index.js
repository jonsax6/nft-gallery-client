import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { MetaMaskProvider } from 'metamask-react'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const appJsx = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <MetaMaskProvider>
      <App />
    </MetaMaskProvider>
  </BrowserRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
