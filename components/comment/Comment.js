import React from "react";
import Image from "next/image";
import { useComment } from 'hooks/useComment';
import { useRouter } from 'next/router';

export default function Comment() {
    const router = useRouter()
    const { id } = router.query;
    const {comments, loading} = useComment(id)
    
    const transformName = (name) => {
        const na = `${name}`;
        const firstLetters = na.split(" ");
        return firstLetters
        .map(letter => {
            letter.toUpperCase();
            return letter[0];
        }).join('')
    };
       
    return (
        <React.Fragment>
            {loading 
            ?
             <h1>loading</h1>
            :
            <div>
                {comments.map(comment => 
                    <div key={comment.id} className="w-full h-full flex items-center mt-5">
                        <div 
                            className="bg-[#20C67B] text-white font-[Jannat] rounded-full w-[70px] h-[70px] text-center leading-[70px] select-none mx-4 text-xl">
                            {comment?.user?.img_uri 
                            ?
                            <Image style={{ borderRadius: '100%'}} src={comment?.user?.img_uri } width={'100%'} height={'100%'} />
                            :
                            transformName(comment?.user?.name)
                            }
                        </div>
                        <div className="w-[50%]">
                            <span className="select-none font-[Jannat] text-[#20C67B] font-semibold">{comment?.user?.name}</span>
                            <p className="m-0">
                                {comment?.text}
                            </p>
                        </div>
                    </div>
                )}
            </div>
            }
        </React.Fragment>
    )
}