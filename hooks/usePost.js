import axios from 'axios';
import useSWR from 'swr';

const URL = `/api/posts`;

export function usePosts({page = 1}) {
    const fetcher = url => axios.get(url).then(({ data }) => data?.data)
    const { data, error } = useSWR(`${URL}?page=${page}`, fetcher)
    return {
        data,
        error,
        loading: !data && !error,
    }
}

export function useMyPosts(jwt) {
    // GET
    const token = { headers: {Authorization: jwt} };
    const fetcher = (url, token) => axios.get(url, token)
    .then(res => res?.data)
    const { data, error } = useSWR([`${URL}/my-posts`, token], fetcher)
    return {
        data,
        error,
        loading: !data && !error,
    }
}

