const fs = require('fs')
const path = require('path')
const pinataSDK = require('@pinata/sdk')

require('dotenv').config()

const pinata = pinataSDK(
  '0bb0c044b7a21bf172e3',
  'a0ad52fafb5f13fcda75fc033edae30d78e946775e9383b2f15d24446f79a0be'
)

const createFile = (data) => {
  const jsonString = JSON.stringify(data)
  fs.writeFile(`./metadata/${data.publishingHistory}.json`,
    jsonString,
    (err) => {
      if (err) {
        console.log('Error writing file', err)
      } else {
        console.log('metadata file created successfully')
      }
    }
  )
}

export const upload = async (metadata) => {
  try {
    const isAuth = await pinata.testAuthentication()

    console.log(isAuth)

    createFile(metadata)

    const ipfsTransfer = await pinata.pinFileToIPFS(fs.createReadStream(`./metadata/${metadata.publishingHistory}.json`))

    const filehash = `https://gateway.pinata.cloud/ipfs/${ipfsTransfer.IpfsHash}`
    console.log(filehash)
    return filehash
  } catch (error) {}
}
