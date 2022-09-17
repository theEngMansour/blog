import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TextEditor from 'components/editor';
import { FormattedMessage, useIntl } from 'react-intl';
import { Alert } from 'components';
import { useRouter } from 'next/router';

export default function EditPost(props) {
    const [title, setTitle] = useState(props.postTitle)
    const [contents, setContents] = useState(props.postContents)
    const [steps, setSteps] = useState(props.postSteps)
    const [alert, setAlert] = useState({sucess: false, error: false})

    const router = useRouter()
    const { formatMessage } = useIntl()
    
    useEffect(() => {
        setAlert({...alert, sucess: false, error: false})
    }, [title, contents, steps])

    const validator = () => {  
        if (title && contents && steps) {
            props.title(title)
            props.contents(contents)
            props.steps(steps)
            setAlert({...alert, sucess: true})
        } else {
            setAlert({...alert, error: true})
        }
    }

    return (
        <React.Fragment>
        <div style={{ fontFamily: "Montserrat-Light"}} className="max-w-screen-xl px-4 pb-16 pt-0 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto text-center mt-4">
                <Image src="/svg/logo-bemedia.svg" className="m-0" width={'200px'} height={'150px'} alt="logo"/>     
                <h1 style={{ fontFamily: "Montserrat-Bold"}}  className="text-2xl text-[#ef4444] sm:text-3xl m-0">
                    <FormattedMessage id={'title.edit'}/>
                </h1>
                <p style={{ fontFamily: "Montserrat-light"}}  className="mt-1 text-[gray]-500">
                    <FormattedMessage id={'edit.welcome'}/>
                </p>
            </div>
            <div className="max-w-lg mx-auto text-center">
                {alert.sucess && (
                    <Alert 
                        type="success" 
                        title={formatMessage({id: 'sucess.is.ok.title'})}
                        text={
                            <>
                                {formatMessage({id: 'sucess.is.ok'})} 
                                <Link href={`/posts/${router.query.id}`} passHref>
                                    {formatMessage({id: 'sucess.is.ok.link'})}
                                </Link> 
                            </>
                        }
                    />
                )}
                {alert.error && (
                    <Alert 
                        type="error" 
                        title={formatMessage({id: 'alert.content.title'})}
                        text={formatMessage({id: 'alert.content.sub'})}
                    />
                )}
            </div>
            <div className="max-w-md mx-auto mt-8 mb-0 space-y-4">
                <div>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full p-4 pr-7 text-sm rounded-lg shadow-sm border-0 focus:outline-[#ef4444] text-gray-500"
                            placeholder={
                                formatMessage({
                                    id: 'title'
                                })
                            }
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full p-4 pr-7 text-sm rounded-lg shadow-sm border-0 focus:outline-[#ef4444] text-gray-500"
                            placeholder={
                                formatMessage({
                                    id: 'content'
                                })
                            }
                            value={contents}
                            onChange={(e) => setContents(e.target.value)}
                        />
                    </div>
                </div>
                <div> 
                    <TextEditor editorState={steps} sendToParent={setSteps} />
                </div>
                <div className="flex items-center justify-end">
                    <button type="submit"
                        onClick={validator}
                        className="inline-block hover:bg-[#f8931f] px-5 py-3 ml-3 text-sm font-medium text-white bg-[#ef4444] rounded-lg outline-none border-0">
                        {
                            formatMessage({
                                id: 'is.ok'
                            })
                        }
                    </button>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}