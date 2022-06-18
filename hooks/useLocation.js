import axios from 'axios';
import useSWR from 'swr';

export function useLocation(latitude, longitude) {
    const URL = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=ar`;
    const fetcher = url => axios.get(url).then(data => data?.data)
    const { data, error } = useSWR(URL, fetcher)
    
    return {
        data,
        error,
        loading: !data && !error,
    }
}