import apiUrl from '../apiConfig'
import axios from 'axios'

// will get all artwork
export const indexTokenOwners = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/token-owner',
  })
}

export const showTokenOwners = (id) => {
  return axios({
    method: 'GET',
    url: apiUrl + `/token-owner/${id}`,
  })
}

export const createTokenOwner = (user, data) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/token-owner',
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

export const removeTokenOwner = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + `/token-owner/${id}`,
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
}
