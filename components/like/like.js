import React, {useEffect, useState, useContext} from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useRouter } from 'next/router';
import { AuthContext } from 'layouts/AuthContext';
import { useLike } from 'hooks/useLike';

export default function Like(props) {
    const router = useRouter()
    const { id } = router.query;
    const { jwt } = useContext(AuthContext)
    const { like, liked } = useLike(id, jwt)

    useEffect(() => {
        sendLikeCount()
    }, [like?.likes])

    const sendLikeCount = () => {
        props.sendToParent(like?.likes)
    };

    return (
        <React.Fragment>
            <div onClick={liked}>
                {like?.userLiked?.length > 0
                ?
                <Checkbox icon={<Favorite sx={{fill: 'red'}} />} checkedIcon={<Favorite sx={{fill: 'red'}} />} checked />
                : 
                <Checkbox icon={<FavoriteBorder sx={{fill: 'black'}} />} checkedIcon={<FavoriteBorder sx={{fill: 'black'}}/>} />
                }   
            </div>
        </React.Fragment>
    )
}