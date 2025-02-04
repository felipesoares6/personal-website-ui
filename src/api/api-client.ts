import axios from 'axios'

export const buildApiClient = ({ baseURL }: { baseURL: string }) => {
  const apiClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true
  })

  return apiClient
}
