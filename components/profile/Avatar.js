import { useRef } from 'react';
import {Avatar, Badge} from '@mui/material';
import Image from 'next/image';

export default function UserAvatar({userImg, takePhoto}) {
    const takePhotoRef = useRef()
    return (
        <div className="flex justify-center my-9">
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                    <span ref={takePhotoRef} onClick={() => takePhoto()} className="bg-[#44c455] hover:bg-[#38a146]  w-7 h-7 rounded-full text-center leading-7 text-xl font-bold text-white select-none">+</span>
                }
            >   
                {userImg
                ?
                <Avatar onClick={() => takePhotoRef.current.click()}
                    className="bg-[#d4d4d6]"
                    alt="Mansour Ahmed"
                    sx={{ width: 100, height: 100 }}
                >
                    <Image src={userImg} width={100} height={100} alt={'profile image'} />
                </Avatar>
                :
                <Avatar onClick={() => takePhotoRef.current.click()}
                    className="bg-[#d4d4d6]"
                    alt="Mansour Ahmed"
                    sx={{ width: 100, height: 100 }}
                />
                }
            </Badge>
        </div>
    )
}