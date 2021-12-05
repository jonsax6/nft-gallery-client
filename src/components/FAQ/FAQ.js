import React from 'react'
import { Typography, Container } from '@mui/material'
import { useMediaQuery } from 'react-responsive'
import TxProcess from '../../images/Transactions3.png'

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
        backgroundColor: 'white',
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
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom={true}>
          So how Does a Blockchain Work? The benefit of using a blockchain is to
          store data in a way that cannot be altered - it is immutable (not able
          to be changed). This immutability gives blockchains their trustless
          security, in other words, we know we can trust that the information
          recorded today cannot be altered, or deleted to suit the needs of a
          vested interest. A blockchain records data in fixed time periods, in
          the case of Bitcoin, this is every 10 minutes.
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom={true}>
          Each block is a ledger of data that fills up until the maximum data
          size is reached, or the 10 minute time period expires. the block is
          then encrypted (hashed using an algorithm) and then closed. That block
          is then linked to the previous block hash, and the two are then
          cryptographically hashed together. The result, is that if any of the
          data in any previous hash down the chain is altered, it will change
          the resulting encryption for it&apos;s next block which changes the
          encryption for the next block and so on down the rest of the entire
          blockchain, which will make that copy of the blockchain different than
          the others on the network.
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom={true}>
          Blockchains have unique and immutable (unable to be altered) security
          feature. A consensus algorithm will detect if there are copies of the
          blockchain that do not match the majority version found in other nodes
          (a minimum 51% consensus). Any altered copies of the blockchain will
          then be ignored and excluded from the network unless it comes back
          into consensus by fixing what has been changed. Due to the very secure
          cryptography that MUST BE exactly the same as all the other copies on
          the network, the blockchain ensures that it&apos;s historical record
          is fully immutable and trustless. This makes blockchains resistant to
          government censorship, or manipulation, because it is impossible to
          shut it down, or to change it&apos;s history.
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
            marginBottom: '35px',
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
          applications, non-fungible tokens (NFTs), and smart contracts.*
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
          A smart contract is a self-executing contract with the terms of the
          agreement between buyer and seller being directly written into lines
          of code. The code and the agreements contained therein exist across a
          distributed, decentralized blockchain network. The code controls the
          execution, and transactions are trackable and irreversible.**
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          Smart contracts permit trusted transactions and agreements to be
          carried out among disparate, anonymous parties without the need for a
          central authority, legal system, or external enforcement mechanism.**
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          While blockchain technology has come to be thought of primarily as the
          foundation for bitcoin​, it has evolved far beyond underpinning the
          virtual currency, to include the full programmability of money using
          smart contracts. It&apos;s never before been possible to program money
          itself. This is the innovation that smart contracts allow us.**
        </Typography>
      </div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '0',
          paddingBottom: '56.25%',
          marginBottom: '20px',
        }}>
        <iframe
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          src='https://www.youtube.com/embed/ZE2HxTmxfrI'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
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
          Non-fungible tokens or NFTs are cryptographic assets on a blockchain
          with unique identification codes and metadata that distinguish them
          from each other. Unlike cryptocurrencies, they cannot be traded or
          exchanged at equivalency. This differs from fungible tokens like
          cryptocurrencies, which are identical to each other and, therefore,
          can be used as a medium for commercial transactions.***
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          The main benefit of using, trading or collecting NFTs is that they are
          the first cryptographically secure, verifiable, and provable digitally
          unique asset. they create digital scarcity. Prior to their usage, a
          jpg, video file, or mp3 music file could be simply copied, and there
          would be no way to prove it is the &apos;original copy&apos; of that
          digital asset. Now with NFTs you can truly possess the
          &apos;original&apos; unique one-of-a-kind asset.***
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          The distinct construction of each NFT has the potential for several
          use cases. For example, they are an ideal vehicle to digitally
          represent physical assets like real estate and artwork. Because they
          are based on blockchains, NFTs can also be used to remove
          intermediaries and connect artists with audiences or for identity
          management. NFTs can remove intermediaries, simplify transactions, and
          create new markets.***
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          Much of the current market for NFTs is centered around collectibles,
          such as digital artwork, sports cards, and rarities. Perhaps the most
          hyped space is NBA Top Shot, a place to collect non-fungible tokenized
          NBA moments in a digital card form. Some of these cards have sold for
          millions of dollars.2 Recently, Twitter CEO, Jack Dorsey, tweeted a
          link to a tokenized version of the first tweet ever written where he
          wrote &quot;just setting up my twttr.&quot; The NFT version of the
          first-ever tweet has already been bid up to $2.5 million.***
        </Typography>
      </div>
      <div>
        <Typography
          style={{ fontWeight: '100', marginBottom: '25px' }}
          variant='h6'
          align='left'
          color='black'
          gutterBottom={true}>
          Understanding NFTs
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          Like physical money, cryptocurrencies are fungible i.e., they can be
          traded or exchanged, one for another. For example, one Bitcoin is
          always equal in value to another Bitcoin. Similarly, a single unit of
          Ether is always equal to another unit. This fungibility characteristic
          makes cryptocurrencies suitable for use as a secure medium of
          transaction in the digital economy.***
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          NFTs shift the crypto paradigm by making each token unique and
          irreplaceable, thereby making it impossible for one non-fungible token
          to be equal to another. They are digital representations of assets and
          have been likened to digital passports because each token contains a
          unique, non-transferable identity to distinguish it from other tokens.
          They are also extensible, meaning you can combine one NFT with another
          to “breed” a third, unique NFT.
        </Typography>
      </div>{' '}
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          Just like Bitcoin, NFTs also contain ownership details for easy
          identification and transfer between token holders. Owners can also add
          metadata or attributes pertaining to the asset in NFTs. For example,
          tokens representing coffee beans can be classified as fair trade. Or,
          artists can sign their digital artwork with their own signature in the
          metadata.***
        </Typography>
      </div>{' '}
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          NFTs evolved from the ERC-721 standard. Developed by some of the same
          people responsible for the ERC-20 smart contract, ERC-721 defines the
          minimum interface – ownership details, security, and metadata –
          required for exchange and distribution of gaming tokens. The ERC-1155
          standard takes the concept further by reducing the transaction and
          storage costs required for NFTs and batching multiple types of
          non-fungible tokens into a single contract.***
        </Typography>
      </div>{' '}
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          Perhaps the most famous use case for NFTs is that of cryptokitties.
          Launched in November 2017, cryptokitties are digital representations
          of cats with unique identifications on Ethereum’s blockchain. Each
          kitty is unique and has a price in ether. They reproduce among
          themselves and produce new offspring, which have different attributes
          and valuations as compared to their parents. Within a few short weeks
          of being launched, cryptokitties racked up a fan base that spent $20
          million worth of ether purchasing, feeding, and nurturing them. Some
          enthusiasts even spent upwards of $100,000 on the effort.***
        </Typography>
      </div>{' '}
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          While the cryptokitties use case may sound trivial, succeeding ones
          have more serious business implications. For example, NFTs have been
          used in private equity transactions as well as real estate deals. One
          of the implications of enabling multiple types of tokens in a contract
          is the ability to provide escrow for different types of NFTs, from
          artwork to real estate, into a single financial transaction.***
        </Typography>
      </div>{' '}
      <div>
        <Typography
          style={{ fontWeight: '100', marginBottom: '25px' }}
          variant='h6'
          align='left'
          color='black'
          gutterBottom={true}>
          Why Are Non-Fungible Tokens Important?
        </Typography>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          Non-fungible tokens are an evolution over the relatively simple
          concept of cryptocurrencies. Modern finance systems consist of
          sophisticated trading and loan systems for different asset types,
          ranging from real estate to lending contracts to artwork. By enabling
          digital representations of physical assets, NFTs are a step forward in
          the reinvention of this infrastructure.***
        </Typography>
      </div>{' '}
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          To be sure, the idea of digital representations of physical assets is
          not novel nor is the use of unique identification. However, when these
          concepts are combined with the benefits of a tamper-resistant
          blockchain of smart contracts, then they become a potent force for
          change.***
        </Typography>
      </div>{' '}
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          Perhaps, the most obvious benefit of NFTs is market efficiency. The
          conversion of a physical asset into a digital one streamlines
          processes and removes intermediaries. NFTs representing digital or
          physical artwork on a blockchain removes the need for agents and
          allows artists to connect directly with their audiences. They can also
          improve business processes. For example, an NFT for a wine bottle will
          make it easier for different actors in a supply chain to interact with
          it and help track its provenance, production, and sale through the
          entire process. Consulting firm Ernst & Young has already developed
          such a solution for one of its clients.***
        </Typography>
      </div>{' '}
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          Non-fungible tokens are also excellent for identity management.
          Consider the case of physical passports that need to be produced at
          every entry and exit point. By converting individual passports into
          NFTs, each with its own unique identifying characteristics, it is
          possible to streamline the entry and exit processes for jurisdictions.
          Expanding this use case, NFTs can be used for identity management
          within the digital realm as well.***
        </Typography>
      </div>{' '}
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          NFTs can also democratize investing by fractionalizing physical assets
          like real estate. It is much easier to divide a digital real estate
          asset among multiple owners than a physical one. That tokenization
          ethic need not be constrained to real estate; it can be extended to
          other assets, such as artwork. Thus, a painting need not always have a
          single owner. Its digital equivalent can have multiple owners, each
          responsible for a fraction of the painting. Such arrangements could
          increase its worth and revenues.***
        </Typography>
      </div>{' '}
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          The most exciting possibility for NFTs lies in the creation of new
          markets and forms of investment. Consider a piece of real estate
          parceled out into multiple divisions, each of which contains different
          characteristics and property types. One of the divisions might be next
          to a beach while another is an entertainment complex and, yet another,
          is a residential district. Depending on its characteristics, each
          piece of land is unique, priced differently, and represented with an
          NFT. Real estate trading, a complex and bureaucratic affair, can be
          simplified by incorporating relevant metadata into each unique NFT.***
        </Typography>
      </div>{' '}
      <div style={{ marginBottom: '20px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          Decentraland, a virtual reality platform on Ethereum’s blockchain, has
          already implemented such a concept.7 As NFTs become more sophisticated
          and are integrated within financial infrastructure, it may become
          possible to implement the same concept of tokenized pieces of land,
          differing in value and location, in the physical world.***
        </Typography>
      </div>{' '}
      <div>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px', fontSize: '13px' }}
          variant='p'
          align='center'
          color='black'>
          *Investopedia. What Is A Blockchain, 2021. Accessed Nov 23,
          2021.&nbsp;
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.investopedia.com/terms/b/blockchain.asp'
            style={{ textDecoration: 'none', color: 'black' }}>
            www.investopedia.com
          </a>
        </Typography>
      </div>{' '}
      <div>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px', fontSize: '13px' }}
          variant='p'
          align='center'
          color='black'>
          **Investopedia. Smart Contracts, 2021. Accessed Nov 23, 2021.&nbsp;
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.investopedia.com/terms/s/smart-contracts.asp'
            style={{ textDecoration: 'none', color: 'black' }}>
            www.investopedia.com
          </a>
        </Typography>
      </div>{' '}
      <div style={{ marginBottom: '15px' }}>
        <Typography
          style={{ fontWeight: '100', paddingBottom: '35px', fontSize: '13px' }}
          variant='p'
          align='center'
          color='black'
          gutterBottom>
          ***Investopedia. Non-Fungible Token (NFT) Definition, 2021. Accessed
          Nov 23, 2021.&nbsp;
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.investopedia.com/non-fungible-tokens-nft-5115211'
            style={{ textDecoration: 'none', color: 'black' }}>
            www.investopedia.com
          </a>
        </Typography>
      </div>{' '}
    </Container>
  )
}

export default FAQ