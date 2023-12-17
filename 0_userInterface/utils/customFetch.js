import axios from 'axios';

const customFetch = axios.create({
  baseURL: "/api/v1",
  "Content-Type": "application/json",
});

export default customFetch;