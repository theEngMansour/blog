import { useEffect, useState } from "react";
import { Box, TextField } from '@mui/material';
import { Geolocation } from '@capacitor/geolocation';
import { useLocation } from 'hooks/useLocation';

export default function GetLocation(props) {
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    const printCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition();
        setLatitude(coordinates?.coords?.latitude)
        setLongitude(coordinates?.coords?.longitude)
    };

    const {data, loading} = useLocation(latitude, longitude)
    
    useEffect(() => {
        printCurrentPosition()
    }, [])

    useEffect(() => {
        handleLocation()
    }, [data])

    const handleLocation = () => {
        props.country(data?.address?.country)
        props.region(data?.address?.state || data?.address?.region)
    }

    return (
        <Box
            sx={{display: 'flex'}}
        >
            <TextField
                sx={{m: '21px'}}
                disabled 
                value={!loading? data?.address?.country : 'جاري جلب الدولة ...'}
            />
            <TextField 
                sx={{m: '21px'}}
                disabled 
                value={!loading? data?.address?.state || data?.address?.region : 'جاري جلب المنطقة ...'}
            />
        </Box>
    )
}