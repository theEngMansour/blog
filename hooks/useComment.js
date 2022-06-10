import axios from 'axios';
import useSWR from 'swr';

export function useComment(postId) {
    const URL = `/api/posts/${postId}`;
    const fetcher = (url) => axios.get(url).then(res => res?.data)
    const { data, error, mutate } = useSWR(`${URL}/get-comments`, fetcher)

    const create = async (jwt, text) => {
        const token = { headers: {Authorization: jwt} };
        await axios.post(`${URL}/create-comment`, text, token).then(res => console.log(res))
        await mutate()
    }

    return {
        data,
        create,
        error,
        loading: !data && !error,
    }
}