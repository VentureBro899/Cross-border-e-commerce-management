import axios from 'axios'

export default axios.create({
  // baseURL: 'http://localhost:8080/',
  crossDomain: true,
  withCredentials: true
})
