import axios from 'axios';
import useSWR from 'swr';

const URL = `/api/posts`;

export function usePosts({page = 1}) {
    // GET All Posts
    const fetcher = url => axios.get(url).then(({ data }) => data?.data)
    const { data, error } = useSWR(`${URL}?page=${page}`, fetcher)
    return {
        data,
        error,
        loading: !data && !error,
    }
}

export function useMyPosts(jwt) {
    // GET My Posts
    const token = { headers: {Authorization: jwt} };
    const fetcher = (url, token) => axios.get(url, token).then(res => res?.data)
    const { data, error } = useSWR([`${URL}/my-posts`, token], fetcher)

    return {
        data,
        error,
        loading: !data && !error,
    }
}

export async function create(jwt, data) {
    const token = { headers: {Authorization: jwt} };
    const postId = await axios.post(`${URL}/create`, data, token) // res => postId // 
    return postId
}

export async function deletePost(jwt, postId) {
    await axios.delete(`${URL}/my-posts/delete`, {
        data: {
            'postId': postId
        },
        headers: {
            Authorization: jwt
        }
    })
}

export function usePost(postId) {
    const fetcher = (url) => axios.get(url).then(res => res?.data)
    const { data: post, error, mutate } = useSWR(`${URL}/${postId}`, fetcher)
 
    const edit = async (jwt, data) => {
        const token = { headers: {Authorization: jwt} };
        const res = await axios.put(`${URL}/my-posts/${postId}/update`, data, token)
        await mutate()
        return res;
    }

    return {
        post,
        edit,
        error,
        loading: !post && !error,
    }
}