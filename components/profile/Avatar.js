import {Avatar, Badge, Skeleton} from '@mui/material';
import Image from 'next/image';

export default function UserAvatar({userImg}) {
    return (
        <div className="flex justify-center my-9">
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                    <span className="bg-[#44c455] hover:bg-[#38a146]  w-7 h-7 rounded-full text-center leading-7 text-xl font-bold text-white select-none">+</span>
                }
            >   
                {userImg
                ?
                <Avatar 
                    className="bg-[#d4d4d6]"
                    alt="Mansour Ahmed"
                    sx={{ width: 100, height: 100 }}
                >
                    <Image src={userImg} width={100} height={100} />
                </Avatar>
                :
                <Avatar 
                    className="bg-[#d4d4d6]"
                    alt="Mansour Ahmed"
                    sx={{ width: 100, height: 100 }}
                />
                }
            </Badge>
        </div>
    )
}