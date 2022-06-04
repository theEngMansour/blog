import axios from 'axios';
import useSWR from 'swr';

export function useLike(postId, jwt) {
    const url = `/api/posts/${postId}/like-count`;
    const token = jwt? { headers: {Authorization: jwt} } : null
    const fetcher = (url, token) => axios.get(url, token).then(res => res?.data)
    const { data: like, error, mutate } = useSWR([url, token], fetcher)

    const liked = () => {
        if(!jwt) return
        const url = `/api/posts/${postId}/like`;
        const params = {}
        axios.put(url, params, token)
        mutate({...like, params})
    }

    return {
        like,
        liked,
        error,
        loading: !like && !error,
    }
}