import apiUrl from '../apiConfig'
import axios from 'axios'

// will get all artwork
export const indexArtwork = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/artwork',
  })
}

export const showArtwork = (id) => {
  return axios({
    method: 'GET',
    url: apiUrl + `/artwork/${id}`,
  })
}

export const createTokenOwner = (user, data) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/artwork',
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
    data: {
      tokenOwner: {
        ownerAccount: data.ownerAccount,
        tokenId: data.tokenId,
        contract: data.contract,
      },
    },
  })
}

export const updateTokenOwner = (id, data, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + `/token-owner/${id}`,
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
    data: {
      tokenOwner: {
        ownerAccount: data.ownerAccount,
        tokenId: data.tokenId,
        contract: data.contract,
      },
    },
  })
}

export const removeArtwork = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + `/artwork/${id}`,
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
}
