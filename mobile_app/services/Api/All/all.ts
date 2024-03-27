import { api } from '../api'

export const all = async () => {
  return api.get('games').then((response) => {
    console.log(response.data)
    return response.data
  })
}
