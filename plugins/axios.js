import axios from 'axios'

let options = {
  timeout: 5000
}
console.log('NODE_ENV=======>', process.env.NODE_ENV)
options.baseURL = process.env.NODE_ENV === 'production' ? process.env.baseUrl : 'http://localhost:8001/'
console.log('baseURL=======>', options.baseURL)
export default axios.create(options)
