import axios from 'axios';
import useSWR from 'swr';
const URL = 'api/account';

export const login = params => axios.post(`${URL}/login`, params)

export const register = params => axios.post(`${URL}/register`, params);

export function useGetProfile(jwt) {
    const url = `/api/account/profile`;
    const token = jwt;
    const fetcher = (url, token) => axios.get(url, { headers: {Authorization: token} })
    .then(res => res?.data)
    const { data: user, error } = useSWR([url, token], fetcher)
    return {
        user,
        error,
        loading: !user && !error,
    }
}
 