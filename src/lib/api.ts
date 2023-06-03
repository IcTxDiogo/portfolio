import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://portfolio-api-1vwu.onrender.com'
    : 'http://192.168.100.80:3333'

export const api = axios.create({
  baseURL,
})
