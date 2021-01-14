import axios from 'axios'
import config from '@/config'

const instance = axios.create({
  baseURL: config.baseUrl,
  proxy: {
    host: 'http://localhost',
    port: 1337,
  },
})

export default instance
