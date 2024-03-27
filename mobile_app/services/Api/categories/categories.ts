import { api } from '../api'

export const categories = async (category) => {
  return api.get(`games?platform=${global.plateform}&category=${category}`).then((response) => {
    return response.data
  })
}
