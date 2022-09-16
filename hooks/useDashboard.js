import axios from 'axios';
import useSWR from 'swr';

const URL = `/api/posts/my-posts/dashboard`;

export function useDashboard(jwt) {
    const token = { headers: {Authorization: jwt} };
    const fetcher = (url, token) => axios.get(url, token).then(res => res?.data)
    const { data, error } = useSWR([URL, token], fetcher)

    return {
        data,
        error,
        loading: !data && !error,
    }
}