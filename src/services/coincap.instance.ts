import axios from 'axios';

export const baseURL = process.env.COINCAP_API_PUBLIC || 'http://api.coincap.io/v2';
const token = process.env.COINCAP_API_TOKEN || null;
const basic = Buffer.from(`${token}`).toString('base64');

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.defaults.headers.common['Authorization'] = `Bearer ${basic}`;

// instance.interceptors.request.use((request) => {
//   // Add authorization token header
//   request.headers['Authorization'] = `Bearer ${basic}`;
//   return request;
// });

export default instance;
