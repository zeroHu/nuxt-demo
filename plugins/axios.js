import axios from 'axios'

let options = {
  timeout: 5000
}
options.baseURL = process.env.NODE_ENV === 'production' ? process.env.baseUrl : 'http://localhost:8001/'

export default axios.create(options)