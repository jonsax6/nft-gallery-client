import apiUrl from '../apiConfig'
import axios from 'axios'

// will get all artwork
export const indexArtists = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/artists',
  })
}

export const showArtwork = (id) => {
  return axios({
    method: 'GET',
    url: apiUrl + `/artists/${id}`,
  })
}

export const createArtists = (user, data) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/artists',
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
    data: {
      artist: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        approved: data.approved,
      },
    },
  })
}

export const updateArtist = (id, data, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + `/artists/${id}`,
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
    data: {
      artist: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        approved: data.approved,
      },
    },
  })
}

export const removeArtist = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + `/artists/${id}`,
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
}
