import axios from 'axios';
import useSWR from 'swr';

const URL = 'api/account';

export const login = params => axios.post(`${URL}/login`, params)

export const register = params => axios.post(`${URL}/register`, params);

export function useProfile(jwt) {
    const url = `/api/account/profile`;
    const token = { headers: {Authorization: jwt} };
    const fetcher = (url, token) => axios.get(url, token)
        .then(res => res?.data)
    const { data: user, error, mutate } = useSWR([url, token], fetcher)

    const update = async (params) => {
        await axios.put(`${url}/update`, params, token)
        await mutate({...user, params})
    }

    return {
        user,
        error,
        update,
        loading: !user && !error,
    }
}