import axios from 'axios';

const URL = 'api/account';

export const login = params => axios.post(`${URL}/login`, params)
export const register = params => axios.post(`${URL}/register`, params);