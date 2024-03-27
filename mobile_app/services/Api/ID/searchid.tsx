import { api } from '../api'

export const searchid = async (id) => {
  return api.get(`/game?id=${id}`).then((response) => {
    return response.data
  })
}
