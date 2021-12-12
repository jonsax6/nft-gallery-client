import apiUrl from '../apiConfig'
import axios from 'axios'

// will get all artwork
export const indexArtwork = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/artwork'
  })
}

export const showArtwork = (id) => {
  return axios({
    method: 'GET',
    url: apiUrl + `/artwork/${id}`
  })
}

export const createArtwork = (user, data) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/artwork',
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
    data: {
      artwork: {
        artist: data.artist,
        title: data.title,
        price: data.price,
        image: data.image,
        displayImageUrl: data.displayImageUrl,
        medium: data.medium,
        artistRoyalty: data.artistRoyalty,
        curatorRoyalty: data.curatorRoyalty,
        provenance: data.provenance,
        exhibitionHistory: data.exhibitionHistory,
        publishingHistory: data.publishingHistory,
        releaseDate: data.releaseDate,
        notes: data.notes,
        contractAddress: data.contractAddress,
        tokenId: data.tokenId,
        owner: user,
      },
    },
  })
}

export const updateArtwork = (id, data, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + `/artwork/${id}`,
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
    data: {
      artwork: {
        artist: data.artist,
        title: data.title,
        price: data.price,
        image: data.image,
        displayImageUrl: data.displayImageUrl,
        medium: data.medium,
        artistRoyalty: data.artistRoyalty,
        curatorRoyalty: data.curatorRoyalty,
        provenance: data.provenance,
        exhibitionHistory: data.exhibitionHistory,
        publishingHistory: data.publishingHistory,
        releaseDate: data.releaseDate,
        notes: data.notes,
        contractAddress: data.contractAddress,
        tokenId: data.tokenId,
        owner: data.owner,
      },
    },
  })
}

export const removeArtwork = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + `/artwork/${id}`,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
