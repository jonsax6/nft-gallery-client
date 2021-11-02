<img src="https://i.imgur.com/7MoUwiX.png" alt="zyzygy-logo" width="700"/>


## What is a zyzygy? 

It is a rare fleeting moment in a gravitational system where 3 celestial bodies come into perfect alignment.  The best known examples of a zyzygy are the solar and lunar eclipses. Zyzygy Studios is an art gallery.  Why are we naming our art gallery Zyzygy?  We believe we are at the intersection point where two worlds are coming into alignment.  The digital world of blockchain technology, with the digital scarcity we can achieve through non-fungible tokens (NFTs), and the real world of tangible touchable things like art, real estate, and property. 

Our vision at Zyzygy Studios is to allow for the sale of art, and the ownership rights to that art to be deployed to a public blockchain such as ethereum. The transfer of ownership at any point in the future will be done by transferring this NFT to the new owner of that art. Built into that NFT contract is a royalty structure, and all the identifying information about the art piece itself. The artist and curator will receive royalties automatically when the art is bought and sold at any point, in perpetuity, as structured into the NFT contract.  In other words, the code is law, and it is impossible to alter it once deployed to the blockchain. The art pieces will have a cryptographic QR code embedded into it which will display the NFT smart contract address. 

For example Zyzygy Studios sells an art piece created by Bob.  Jane buys this art piece from Zyzygy Studios with Ethereum (a popular crypto-currency with NFT and smart contract capability) and the transaction transfers the bill of sale to Jane, who now controls the ownership of Bob's art.  The studio receives a royalty and initial percentage for the first sale.  At some point in the future, Jane decides to liquidate some of her physical assets to buy some real estate, so she auctions Bob's art. Bob's art has appreciated in value significantly, so Jane will make a nice profit! Steve, the winner of the auction, will send Jane the amount of ethereum required to make the purchase, and when that ethereum is transferred to Jane, a small percentage will be automatically sent to Bob's ethereum address to cover his contractually agreed-upon royalty. And if Steve decides to auction Bob's art in the future, Bob and Zyzygy will again receive their royalties. 

If it's also coded into the smart contract, Zyzygy studios can receive a small royalty either as a taper-off, or also in perpetuity.  This can be decided when the contract is deployed to the blockchain and the NFT is issued.

There are however a few technical issues that need to be solved in order to prevent counterfeiting. There is nothing stopping someone from creating a copy of the art, and placing the same QR code on the counterfeit art piece. So the authenticity of the artwork will still need to be verified by 3rd parties.  Until a foolproof system for this can be created, authenticity will either be on an honor code system, or need to be verified by an expert.  In the example of real estate or land rights, this is not an issue because physical land or a house, cannot be "faked" in any way, so the ownership rights, or deeds, will simply be the NFT that stores all the ownership rights, which itself, cannot be altered or faked.  But small-scale artwork can be faked, so this could present an opportunity for counterfeiting. Bad actors will be bad actors, so for now, authenticity will still be in question, in the same way that it is now, without the NFT ownership rights.  The NFT will simply protect the artist's royalty rights by enforcing the contract automatically.  If the sale of the art takes place, the royalties will be paid, no matter what. 

### Website URL: 
https://jonsax6.github.io/nft-gallery-client/

### API URL:
https://rocky-ocean-73265.herokuapp.com

### API Repo: 
https://github.com/jonsax6/nft-gallery-api

### Website Homepage:
![HOMEPAGE](https://i.imgur.com/7mbTKpF.png)

## About our website:

Zyzygy Studios is an art gallery site where you can view all artist's works, and then arrange for the purchase of that art. In V1 for the site, patrons will only be able to view the art. The next update for the website will integrate with the blockchain, and patrons will have the ability to directly purchase the art from the studio using the metamask browser extension. This feature is currently under development and will be available in mid to late November 2021. So stay tuned!  

---
The website was created using React.js, Express and MongoDB as part of an educational final project for General Assembly's Software Engineering Intensive in October 2021 by Jonathan Cole.

The planning process involved creating wire-frames for the homepage and gallery views using Figma, as well as an ERD diagram for the api linked above. The login, logout, change password and art submittal forms were straightforward as far as layout and didn't need any pre-planning. A third-party npm package called react-responsive-carousel was used to create the homepage carousel. Problems and bugs were strategically fixed using console.log's.  Any third-party npm package docs were closely followed.

---
## Specific Technologies Used:

JavaScript

React.js

Material-UI

Axios

Express

MongoDB

---
## User Story:

### In V1 of the website (November 1, 2021):

As an unregistered user, I can sign up with email and password.

As a registered user, I can sign in with email and password.

As a signed in user, I can change password.

As a signed in user, I can sign out.

As an unregistered user, I can see all of the artist's works.

### In V2 of the website (mid to late November 2021):
As a registered user, I can purchase a work of art using the metamask chrome browser plug in and buy art using Ethereum.

The Gallery admin can remove these art submissions at their discretion.

## Wireframes (created using Figma)
![HOMEPAGE LOGGED OUT](https://i.imgur.com/EFcAVz3.png)

![HOMEPAGE LOGGED IN](https://i.imgur.com/rzeILFf.png)

![GALLERY VIEW](https://i.imgur.com/uKC6zqt.png)
---

Current implementation is V1.

V2 implementation will include blockchain integration, artist profiles, featured artists, and specific artist catalogs.