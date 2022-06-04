import axios from 'axios';
import useSWR from 'swr';

export function useComment(postId) {
    const url = `/api/posts/${postId}/get-comments`;
    const fetcher = (url) => axios.get(url).then(res => res?.data)
    const { data: comments, error, mutate } = useSWR(url, fetcher)

    return {
        comments,
        error,
        loading: !comments && !error,
    }
}