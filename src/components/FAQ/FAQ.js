import React from 'react'
import { Typography, Container } from '@mui/material'
import { useMediaQuery } from 'react-responsive'
import TxProcess from '../../images/Transaction_Process.png'

const desktop = '200px'
const tablet = '100px'
const phone = '30px'

const FAQ = () => {
  const isPhone = useMediaQuery({
    query: '(max-width: 600px)'
  })

  const isTablet = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  let mobileStyle

  if (isPhone) {
    mobileStyle = phone
  } else if (isTablet) {
    mobileStyle = tablet
  } else {
    mobileStyle = desktop
  }
  return (
    <Container
      style={{
        height: '100vh',
        width: '100vw',
        paddingTop: '100px',
        paddingLeft: mobileStyle,
        paddingRight: mobileStyle,
        backgroundColor: 'white'
      }}>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', marginBottom: '25px' }}
          variant='h4'
          align='center'
          color='black'
          gutterBottom={true}>
          Frequently Asked Questions
        </Typography>
      </div>
      <div>
        <Typography
          style={{ fontWeight: '100', marginBottom: '25px' }}
          variant='h5'
          align='left'
          color='black'
          gutterBottom={true}>
          Q - What is a blockchain?
        </Typography>
      </div>
      <div style={{ marginBottom: '35px' }}>
        <Typography
          style={{ fontWeight: '100' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom={true}>
          So how Does a Blockchain Work? The benefit of using a blockchain is to
          store data in a way that cannot be altered - it is immutable (not able to
          be changed).  This immutability gives blockchains their trustless security,
          in other words, we know we can trust that the information recorded today cannot
          be altered, or deleted to suit the needs of a vested interest. A blockchain records
          data in fixed time periods, in the case of Bitcoin, this is every 10 minutes.
        </Typography>
      </div>
      <div style={{ marginBottom: '35px' }}>
        <Typography
          style={{ fontWeight: '100' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom={true}>
          Each block is a ledger of data that fills up until the maximum data size is reached,
          or the 10 minute time period expires. the block is then encrypted (hashed using an
          algorithm) and then closed. That block is then linked to the previous block hash,
          and the two are then cryptographically hashed together. The result, is that if any
          of the data in any previous hash down the chain is altered, it will change the
          resulting encryption for it&apos;s next block which changes the encryption for the next
          block and so on down the rest of the entire blockchain, which will make that copy
          of the blockchain different than the others on the network.
        </Typography>
      </div>
      <div style={{ marginBottom: '35px' }}>
        <Typography
          style={{ fontWeight: '100' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom={true}>
          A consensus algorithm will detect if there are copies of the blockchain that do not match the
          majority (a minimum 51% consensus) and that copy of the blockchain will then be ignored
          and excluded from the network unless it comes back into consensus by fixing what has been
          changed. Due to the very secure cryptography that MUST BE exactly the same as all the other
          copies on the network, the blockchain ensures that it&apos;s historical record is
          fully immutable and trustless.
        </Typography>
      </div>
      <div>
        <Typography
          style={{ fontWeight: '100', marginBottom: '25px' }}
          variant='h6'
          align='left'
          color='black'
          gutterBottom={true}>
          Transaction Process:
        </Typography>
      </div>
      <div>
        <img
          src={TxProcess}
          style={{
            width: '100%',
            marginBottom: '35px'
          }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', marginTop: '25px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          First proposed as a research project in 1991, the blockchain concept
          predated its first widespread application in use, Bitcoin in 2009. In
          the years since, the use of blockchains has exploded via the creation
          of various cryptocurrencies, decentralized finance (DeFi)
          applications, non-fungible tokens (NFTs), and smart contracts.
        </Typography>
      </div>
      <div>
        <Typography
          style={{ fontWeight: '100', marginBottom: '25px' }}
          variant='h5'
          align='left'
          color='black'
          gutterBottom={true}>
          Q - What is a Smart Contract?
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          A smart contract is a self-executing contract with the terms of the agreement between
          buyer and seller being directly written into lines of code. The code and the agreements
          contained therein exist across a distributed, decentralized blockchain network. The
          code controls the execution, and transactions are trackable and irreversible.
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          Smart contracts permit trusted transactions and agreements to be carried out among
          disparate, anonymous parties without the need for a central authority, legal system,
          or external enforcement mechanism.
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          While blockchain technology has come to be thought of primarily as the foundation
          for bitcoin​, it has evolved far beyond underpinning the virtual currency, to include
          the full programmability of money using smart contracts.  It&apos;s never before been
          possible to program money itself.  This is the innovation that smart contracts allow us.
        </Typography>
      </div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '0',
          paddingBottom: '56.25%',
          marginBottom: '20px'
        }}>
        <iframe
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%'
          }}
          src="https://www.youtube.com/embed/ZE2HxTmxfrI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
      <div>
        <Typography
          style={{ fontWeight: '100', marginBottom: '25px' }}
          variant='h5'
          align='left'
          color='black'
          gutterBottom={true}>
          Q - What are Non Fungible Tokens (NFTs)?
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          Non-fungible tokens or NFTs are cryptographic assets on a blockchain with unique
          identification codes and metadata that distinguish them from each other. Unlike
          cryptocurrencies, they cannot be traded or exchanged at equivalency. This differs
          from fungible tokens like cryptocurrencies, which are identical to each other and,
          therefore, can be used as a medium for commercial transactions.
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          The main benefit of using, trading or collecting NFTs is that they are the first
          cryptographically secure, verifiable, and provable digitally unique asset.  they
          create digital scarcity. Prior to their usage, a jpg, video file, or mp3 music file
          could be simply copied, and there would be no way to prove it is the &apos;original
          copy&apos; of that digital asset. Now with NFTs you can truly possess the
          &apos;original&apos; unique one-of-a-kind asset.
        </Typography>
      </div>    </Container>
  )
}

export default FAQ