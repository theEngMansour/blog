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
            sx={{display: 'flex', justifyContent: 'center'}}
        >
            <div>
                <div className="relative">
                    <input
                        disabled
                        type="text"
                        className="w-full bg-white p-4 pr-7 text-sm rounded-lg shadow-sm border-0 focus:outline-[#57be6d]"
                        value={!loading? data?.address?.country : 'جاري جلب الدولة ...'}
                    />
                </div>
            </div>
            <div className="mx-3">
                <div className="relative">
                    <input
                        disabled
                        type="text"
                        className="w-full bg-white p-4 pr-7 text-sm rounded-lg shadow-sm border-0 focus:outline-[#57be6d]"
                        value={!loading? data?.address?.state || data?.address?.region : 'جاري جلب المنطقة ...'}
                    />
                </div>
            </div>
        </Box>
    )
}