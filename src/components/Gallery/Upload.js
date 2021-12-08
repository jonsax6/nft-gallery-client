/* eslint-disable no-undef */
const pinataSDK = require('@pinata/sdk')

// const pinata = pinataSDK(
//   'da4ce3d3962c18c57f28',
//   '32d3b4b4a6891285e700c25ad00bb743359531ead28a39e9fafefadf0777dcca'
// )

const pinata = pinataSDK(
  '0bb0c044b7a21bf172e3',
  'a0ad52fafb5f13fcda75fc033edae30d78e946775e9383b2f15d24446f79a0be'
)

// This method is not needed anymore but for demo
// fileObject can be returned from frontend without saving to FS
const createFile = (data) => {
  const jsonFile = new Blob([JSON.stringify(data)], { type: 'application/json' })
  console.log('File Created!', jsonFile)
  return jsonFile
}

export const upload = async (metadata) => {
  pinata.testAuthentication().then((result) => {
    // handle successful authentication here
    console.log(result)
  }).catch((err) => {
    // handle error here
    console.log(err)
  })

  const options = {
    pinataMetadata: {
      name: metadata.title,
    },
    pinataOptions: {
      cidVersion: 1
    }
  }

  const filehash = await pinata.pinJSONToIPFS(metadata, options).then((ipfsTransfer) => {
    // handle results here
    const filehash = `https://gateway.pinata.cloud/ipfs/${ipfsTransfer.IpfsHash}`
    console.log('ipfsTransfer', ipfsTransfer, 'filehash', filehash)
    return filehash
  }).catch((err) => {
    // handle error here
    console.log(err)
  })

  console.log(filehash)
  return filehash
}
