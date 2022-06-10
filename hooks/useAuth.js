import axios from 'axios';
import useSWR from 'swr';

const URL = 'api/account';

export const login = params => axios.post(`${URL}/login`, params)

export const register = params => axios.post(`${URL}/register`, params);

export function useProfile(jwt) {
    /* 
       fetcher data user
       using useSWR
    */
    const url = `/api/account/profile`;
    const token = { headers: {Authorization: jwt} };
    const fetcher = (url, token) => axios.get(url, token).then(res => res?.data)
    const { data: user, error, mutate } = useSWR([url, token], fetcher)

    /* 
       update data user
       after upadate use the mutate 
    */
    const update = async (params) => {
        await axios.put(`${url}/update`, params, token)
        await mutate()
        // await mutate({...user, params})
    }

    /* 
       update data profile photo for user
       after upadate use the mutate 
    */
    const uploadPhoto = async (blobUrl) => {
        const photoData = new FormData();
        try {
            const response = await fetch(blobUrl)
            const blob = await response.blob();
            photoData.append('avatar', blob)
            await axios.put(`${url}/upload-photo`, photoData, token)
                .then(res => console.log(res))
            await mutate()
        } catch(e) {
            console.log(e.response);
        }
    }

    return {
        user,
        error,
        update,
        uploadPhoto,
        loading: !user && !error,
    }
}
