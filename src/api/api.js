import axios from 'axios';
import { URL } from './url';

const api = axios.create();
api.defaults.baseURL = `${URL}`;
api.defaults.withCredentials = true;

export default api;
