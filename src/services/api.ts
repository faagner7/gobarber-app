import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3337/', // ANDROID SIMULATOR!!
  // baseURL: 'http://localhost:3337/', // iOS pode ser localhost!
});

export default api;
