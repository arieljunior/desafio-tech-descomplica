import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:5000/api/v1'
})
  
http.defaults.headers['content-type'] = 'application/json'
http.defaults.headers['Access-Control-Allow-Origin'] = '*'
  
export default http